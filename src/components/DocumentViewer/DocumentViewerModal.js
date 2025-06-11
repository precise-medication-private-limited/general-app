import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ActivityIndicator, 
  Dimensions, 
  TouchableOpacity,
  Platform,
  StatusBar,
  Animated,
  Easing
} from 'react-native';
import Modal from 'react-native-modal';
import Pdf from 'react-native-pdf';
import { FontFamily, Color } from '../../utils/GlobalStyles';
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { LinearGradient } from "expo-linear-gradient";
import * as FileSystem from "expo-file-system";

const { width, height } = Dimensions.get('window');

const DocumentViewerModal = ({ visible, documentUri, documentType, onClose }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [localFileUri, setLocalFileUri] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [pdfRef, setPdfRef] = useState(null);
  
  // Add state for showing scrolling tip
  const [showScrollTip, setShowScrollTip] = useState(false);
  
  // Animation values
  const fadeAnim = useState(new Animated.Value(0))[0];
  const progressAnim = useState(new Animated.Value(0))[0];
  
  useEffect(() => {
    if (visible) {
      // Fade in animation
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
    
    if (visible && documentUri) {
      // console.log("Opening document with in-app DocumentViewerModal");
      prepareDocument();
      
      // Start progress animation
      Animated.timing(progressAnim, {
        toValue: 100,
        duration: 2000,
        easing: Easing.out(Easing.ease),
        useNativeDriver: false,
      }).start();
    }
    
    // Don't return a cleanup function that might cause issues
  }, [visible, documentUri]);
  
  const prepareDocument = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Important: Don't reset localFileUri if documentUri is the same - fixes reload issue
      if (documentUri === localFileUri) {
        // console.log("Document URI is same as localFileUri, skipping download", documentUri);
        setLoading(false);
        return;
      }
      
      // Check if the document exists before trying to use it
      if (documentUri && !documentUri.startsWith('http')) {
        // Check if the file exists before trying to use it
        const fileInfo = await FileSystem.getInfoAsync(documentUri);
        if (fileInfo.exists) {
          // console.log("Document exists at path, setting localFileUri:", documentUri);
          setLocalFileUri(documentUri);
          setLoading(false);
          return;
        } else {
          console.log("File does not exist at path:", documentUri);
          setError("File not found. It may have been deleted or moved.");
          setLoading(false);
          return;
        }
      }
      
      // For remote documents, create a local copy
      if (documentUri && documentUri.startsWith('http')) {
        const timestamp = Date.now();
        const extension = documentUri.split('.').pop().split('?')[0]; // Get extension without query params
        const dest = `${FileSystem.cacheDirectory}temp_document_${timestamp}.${extension}`;
        
        const download = await FileSystem.downloadAsync(
          documentUri,
          dest
        );
        
        if (download.status === 200) {
          setLocalFileUri(download.uri);
        } else {
          throw new Error(`Download failed with status ${download.status}`);
        }
      }
      
      setLoading(false);
    } catch (err) {
      console.error('Error preparing document:', err);
      setError('Failed to load document. Please try again.');
      setLoading(false);
    }
  };

  // Re-add changePage function for buttons
  const changePage = (direction) => {
    if (!pdfRef) return;
    
    let newPage = pageNumber;
    if (direction === 'next' && pageNumber < totalPages) {
      newPage = pageNumber + 1;
    } else if (direction === 'prev' && pageNumber > 1) {
      newPage = pageNumber - 1;
    }
    
    if (newPage !== pageNumber) {
      // Use the setPage method provided by react-native-pdf
      pdfRef.setPage(newPage);
      // Note: onPageChanged should update the pageNumber state automatically
    }
  };
  
  const renderPdfViewer = () => {
    if (!localFileUri) return null;
    
    return (
      <View style={styles.pdfContainer}>
        <Pdf
          source={{ uri: localFileUri }}
          ref={(ref) => setPdfRef(ref)}
          enableRTL={false}
          enableAnnotationRendering={true}
          showsVerticalScrollIndicator={true}
          showsHorizontalScrollIndicator={false}
          // Adjust spacing for better scroll experience
          spacing={15}
          // Add these props for Android performance
          androidLayerType="hardware"
          // Add minimum scale to prevent unexpected behavior
          minScale={1.0}
          onLoadComplete={(numberOfPages, filePath) => {
            // console.log(`PDF loaded with ${numberOfPages} pages`);
            setTotalPages(numberOfPages);
          }}
          onPageChanged={(page) => {
            // console.log(`Page changed to ${page}`);
            setPageNumber(page);
          }}
          onError={(error) => {
            console.log('PDF error:', error);
            setError('Error loading PDF. The file may be corrupted.');
          }}
          style={styles.pdf}
          // Configure for vertical scrolling
          enablePaging={false}
          horizontal={false}
          // spacing={8}
          // Support zooming
          scale={1.0}
          // minScale={0.5}
          maxScale={3.0}
          enableAntialiasing={true}
          singlePage={false}
          renderActivityIndicator={() => (
            <View style={styles.customLoader}>
              <LinearGradient
                colors={[Color.bcHeader, Color.bcHighlight]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.loaderGradient}
              >
                <ActivityIndicator color="#fff" size="large" />
              </LinearGradient>
            </View>
          )}
          // enableAnnotationRendering={false}
        />
        
        {/* Info button for scrolling guidance */}
        <TouchableOpacity 
          style={styles.infoButton}
          onPress={() => setShowScrollTip(!showScrollTip)}
        >
          <LinearGradient
            colors={['rgba(0,0,0,0.7)', 'rgba(0,0,0,0.5)']}
            style={styles.infoButtonGradient}
          >
            <FontAwesome name="info" size={16} color="#fff" />
          </LinearGradient>
        </TouchableOpacity>
        
        {/* Scrolling tip tooltip */}
        {showScrollTip && (
          <View style={styles.tooltipContainer}>
            <LinearGradient
              colors={['rgba(0,0,0,0.8)', 'rgba(0,0,0,0.6)']}
              style={styles.tooltipGradient}
            >
              <Text style={styles.tooltipText}>
                If you're having trouble scrolling, try using two fingers to scroll through the document.
              </Text>
              <TouchableOpacity 
                style={styles.tooltipCloseButton}
                onPress={() => setShowScrollTip(false)}
              >
                <Text style={styles.tooltipCloseText}>Got it</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        )}
        
        {/* Always show page indicator, even when totalPages is 0 */}
        <View style={styles.pageIndicatorContainer}>
          <View style={styles.pageIndicator}>
            <LinearGradient
              colors={['rgba(0,0,0,0.7)', 'rgba(0,0,0,0.5)']}
              style={styles.pageIndicatorGradient}
            >
              <Text style={styles.pageIndicatorText}>
                Page {pageNumber} {totalPages > 0 ? `of ${totalPages}` : ''}
              </Text>
            </LinearGradient>
          </View>
        </View>
      </View>
    );
  };
  
  const renderDocViewer = () => {
    if (!localFileUri) return null;
    
    // For DOC/DOCX, we show a premium message about limitations
    return (
      <View style={styles.docViewerContainer}>
        <LinearGradient
          colors={['rgba(229, 130, 173, 0.2)', 'rgba(229, 130, 173, 0.1)']}
          style={styles.docIconContainer}
        >
          <FontAwesome name="file-text-o" size={60} color={Color.bcHighlight} />
        </LinearGradient>
        
        <Text style={styles.docViewerText}>
          Document preview is limited
        </Text>
        
        <View style={styles.docInfoContainer}>
          <Text style={styles.docViewerSubtext}>
            For the best experience, we recommend converting document files to PDF format.
          </Text>
          
          <TouchableOpacity style={styles.shareButton} onPress={onClose}>
            <LinearGradient
              colors={[Color.bcHeader, Color.bcHighlight]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.shareButtonGradient}
            >
              <FontAwesome name="share-alt" size={16} color="#fff" style={{marginRight: 8}} />
              <Text style={styles.shareButtonText}>Share Document</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const getFileTypeIcon = (type) => {
    switch(type) {
      case 'txt': return 'file-text';
      case 'csv': return 'file-excel-o';
      case 'xls': 
      case 'xlsx': return 'file-excel-o';
      case 'ppt':
      case 'pptx': return 'file-powerpoint-o';
      default: return 'file-o';
    }
  };

  return (
    <Modal
      isVisible={visible}
      onBackdropPress={onClose}
      // onSwipeComplete={onClose}
      // swipeDirection="down"
      backdropOpacity={0.9}
      style={styles.modal}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      statusBarTranslucent={true}
      // Add prop to prevent auto-hiding when modal is closed
      useNativeDriver={true}
      hideModalContentWhileAnimating={true}
      onModalHide={() => {
        // Optional: Reset some state when modal is fully hidden
        setPageNumber(1);
        setTotalPages(0);
        setPdfRef(null);
        // Do not reset localFileUri here
      }}
    >
      <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
        <LinearGradient
          colors={[Color.bcHeader, Color.bcHighlight]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={styles.backgroundGradient}
        >
          <View style={styles.handleContainer}>
            <View style={styles.handle} />
          </View>
          
          <View style={styles.header}>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <LinearGradient
                colors={['rgba(255,255,255,0.2)', 'rgba(255,255,255,0.1)']}
                style={styles.closeButtonGradient}
              >
                <FontAwesome name="close" size={18} color="#fff" />
              </LinearGradient>
            </TouchableOpacity>
            <Text style={styles.title}>Document Viewer</Text>
            <View style={styles.placeholder} />
          </View>
          
          {loading && (
            <View style={styles.loadingContainer}>
              <View style={styles.loadingCard}>
                <LinearGradient
                  colors={[Color.bcHeader, Color.bcHighlight]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={styles.loadingIconContainer}
                >
                  <MaterialIcons name="file-present" size={32} color="#fff" />
                </LinearGradient>
                
                <Text style={styles.loadingTitle}>Loading Document</Text>
                <Text style={styles.loadingText}>Please wait while we prepare your document...</Text>
                
                <View style={styles.progressContainer}>
                  <View style={styles.progressBar}>
                    <Animated.View 
                      style={[
                        styles.progressFill,
                        {
                          width: progressAnim.interpolate({
                            inputRange: [0, 100],
                            outputRange: ['0%', '100%'],
                          }),
                        },
                      ]}
                    />
                  </View>
                </View>
              </View>
            </View>
          )}
          
          {error && !loading && (
            <View style={styles.errorContainer}>
              <LinearGradient
                colors={['rgba(255, 107, 107, 0.2)', 'rgba(255, 107, 107, 0.1)']}
                style={styles.errorIconContainer}
              >
                <FontAwesome name="exclamation-triangle" size={40} color="#ff6b6b" />
              </LinearGradient>
              <Text style={styles.errorTitle}>Unable to Load Document</Text>
              <Text style={styles.errorText}>{error}</Text>
              <TouchableOpacity style={styles.retryButton} onPress={prepareDocument}>
                <LinearGradient
                  colors={[Color.bcHeader, Color.bcHighlight]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={styles.retryButtonGradient}
                >
                  <FontAwesome name="refresh" size={14} color="#fff" style={{marginRight: 8}} />
                  <Text style={styles.retryButtonText}>Try Again</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          )}
          
          {!loading && !error && (
            <View style={styles.documentContainer}>
              {documentType === 'pdf' && renderPdfViewer()}
              {['doc', 'docx'].includes(documentType) && renderDocViewer()}
              {!['pdf', 'doc', 'docx'].includes(documentType) && (
                <View style={styles.unsupportedContainer}>
                  <LinearGradient
                    colors={['rgba(255, 255, 255, 0.15)', 'rgba(255, 255, 255, 0.05)']}
                    style={styles.unsupportedIconContainer}
                  >
                    <FontAwesome name={getFileTypeIcon(documentType)} size={50} color="#fff" />
                  </LinearGradient>
                  <Text style={styles.docViewerText}>
                    Unsupported File Type
                  </Text>
                  <Text style={styles.docViewerSubtext}>
                    This file format cannot be previewed in the app.
                  </Text>
                  <TouchableOpacity style={styles.shareButton} onPress={onClose}>
                    <LinearGradient
                      colors={[Color.bcHeader, Color.bcHighlight]}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 0 }}
                      style={styles.shareButtonGradient}
                    >
                      <FontAwesome name="external-link" size={16} color="#fff" style={{marginRight: 8}} />
                      <Text style={styles.shareButtonText}>Open in Another App</Text>
                    </LinearGradient>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          )}
        </LinearGradient>
      </Animated.View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    margin: 0,
    justifyContent: 'flex-end',
  },
  container: {
    flex: 1,
    // Use a darker background for the modal container itself if needed
    // backgroundColor: '#121212', 
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    overflow: 'hidden',
  },
  backgroundGradient: {
    flex: 1,
  },
  handleContainer: {
    alignItems: 'center',
    paddingTop: 8,
  },
  handle: {
    width: 40,
    height: 4,
    borderRadius: 2,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    marginBottom: 8,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: Platform.OS === 'ios' ? 20 : 16, // Adjust top padding for status bar
    paddingBottom: 8,
  },
  closeButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    overflow: 'hidden',
  },
  closeButtonGradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    fontFamily: FontFamily.Inter_Bold,
    color: '#fff',
  },
  placeholder: {
    width: 36,
    height: 36,
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingCard: {
    width: '90%',
    maxWidth: 400,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
  },
  loadingIconContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  loadingTitle: {
    fontSize: 16,
    fontFamily: FontFamily.Inter_Bold,
    color: '#fff',
    marginBottom: 8,
  },
  loadingText: {
    fontSize: 14,
    fontFamily: FontFamily.Inter_Regular,
    color: '#ccc',
    textAlign: 'center',
    marginBottom: 16,
  },
  progressContainer: {
    width: '100%',
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    overflow: 'hidden',
  },
  progressBar: {
    width: '100%',
    height: '100%',
    borderRadius: 4,
  },
  progressFill: {
    height: '100%',
    borderRadius: 4,
    backgroundColor: Color.bcHighlight,
  },
  errorContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  errorIconContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  errorTitle: {
    fontSize: 16,
    fontFamily: FontFamily.Inter_Bold,
    color: '#fff',
    marginBottom: 8,
  },
  errorText: {
    fontSize: 14,
    fontFamily: FontFamily.Inter_Regular,
    color: '#ccc',
    textAlign: 'center',
    marginBottom: 16,
  },
  retryButton: {
    width: '100%',
    height: 48,
    borderRadius: 24,
    overflow: 'hidden',
  },
  retryButtonGradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row', // Keep icon and text in row
  },
  retryButtonText: {
    fontSize: 16,
    fontFamily: FontFamily.Inter_Medium, // Use Medium for button text
    color: '#fff',
  },
  documentContainer: {
    flex: 1,
    // Remove padding to allow PDF to fill space
    // padding: 16, 
  },
  pdfContainer: {
    flex: 1,
    borderRadius: 12,
    // overflow: 'hidden',
    backgroundColor: '#fff',
  },
  pdf: {
    flex: 1,
    backgroundColor: '#fff',
    minHeight: height * 0.7,
  },
  
  // Updated page indicator styles
  pageIndicatorContainer: {
    position: 'absolute',
    bottom: 16,
    alignSelf: 'center',
    zIndex: 999,
    pointerEvents: 'none',
  },
  pageIndicator: {
    overflow: 'hidden',
    borderRadius: 20,
  },
  pageIndicatorGradient: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  pageIndicatorText: {
    color: '#fff',
    fontSize: 14,
    fontFamily: FontFamily.Inter_Bold,
  },
  
  docViewerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  docIconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  docViewerText: {
    fontSize: 18,
    fontFamily: FontFamily.Inter_Bold,
    color: '#fff',
    marginBottom: 8,
  },
  docInfoContainer: {
    width: '100%',
    alignItems: 'center',
  },
  docViewerSubtext: {
    fontSize: 14,
    fontFamily: FontFamily.Inter_Regular,
    color: '#ccc',
    textAlign: 'center',
    marginBottom: 16,
  },
  shareButton: {
    width: '100%',
    height: 48,
    borderRadius: 24,
    overflow: 'hidden',
  },
  shareButtonGradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  shareButtonText: {
    fontSize: 16,
    fontFamily: FontFamily.Inter_Bold,
    color: '#fff',
  },
  unsupportedContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  unsupportedIconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  infoButton: {
    position: 'absolute',
    top: 16,
    right: 16,
    width: 36,
    height: 36,
    borderRadius: 18,
    overflow: 'hidden',
    zIndex: 999,
  },
  infoButtonGradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tooltipContainer: {
    position: 'absolute',
    top: 60,
    right: 16,
    width: 250,
    borderRadius: 8,
    overflow: 'hidden',
    zIndex: 1000,
  },
  tooltipGradient: {
    padding: 12,
  },
  tooltipText: {
    color: '#fff',
    fontSize: 14,
    fontFamily: FontFamily.Inter_Regular,
    marginBottom: 8,
  },
  tooltipCloseButton: {
    alignSelf: 'flex-end',
  },
  tooltipCloseText: {
    color: Color.bcHighlight,
    fontSize: 14,
    fontFamily: FontFamily.Inter_Bold,
  },
});

export default DocumentViewerModal;
