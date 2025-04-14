
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';
import MediaUploader from '@/components/MediaUploader';
import MediaGallery, { Media } from '@/components/MediaGallery';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { PlusCircle, ImageIcon, Film } from 'lucide-react';

const MediaManager: React.FC = () => {
  const [selectedMedia, setSelectedMedia] = useState<Media | null>(null);
  const [activeTab, setActiveTab] = useState('all');
  
  const handleMediaSelect = (media: Media) => {
    setSelectedMedia(media);
  };
  
  const handleUploadComplete = () => {
    // Rafraîchir la galerie en changeant d'onglet puis en revenant
    const currentTab = activeTab;
    setActiveTab('temp');
    setTimeout(() => {
      setActiveTab(currentTab);
    }, 100);
  };
  
  return (
    <>
      <Helmet>
        <title>Gestionnaire de médias | LeVigile</title>
        <meta name="description" content="Gérez vos images et vidéos pour votre site web de sécurité" />
      </Helmet>
      
      <Header />
      
      <main className="container mx-auto px-4 py-8 mt-24">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-levigile-blue">Gestionnaire de médias</h1>
          
          <Sheet>
            <SheetTrigger asChild>
              <Button className="flex items-center gap-2">
                <PlusCircle size={16} />
                <span>Nouveau média</span>
              </Button>
            </SheetTrigger>
            <SheetContent className="sm:max-w-md">
              <SheetHeader>
                <SheetTitle>Ajouter un nouveau média</SheetTitle>
                <SheetDescription>
                  Téléchargez des images ou des vidéos pour votre site web
                </SheetDescription>
              </SheetHeader>
              <div className="mt-6">
                <MediaUploader 
                  onUploadComplete={(url, metadata) => {
                    handleUploadComplete();
                  }} 
                />
              </div>
            </SheetContent>
          </Sheet>
        </div>
        
        <Card className="p-6">
          <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-6">
              <TabsTrigger value="all" className="flex items-center gap-2">
                Tous les médias
              </TabsTrigger>
              <TabsTrigger value="images" className="flex items-center gap-2">
                <ImageIcon size={16} />
                Images
              </TabsTrigger>
              <TabsTrigger value="videos" className="flex items-center gap-2">
                <Film size={16} />
                Vidéos
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="all">
              <MediaGallery 
                selectable={true} 
                onSelect={handleMediaSelect}
                showDelete={true} 
              />
            </TabsContent>
            
            <TabsContent value="images">
              <MediaGallery 
                bucket="images" 
                selectable={true} 
                onSelect={handleMediaSelect}
                showDelete={true} 
              />
            </TabsContent>
            
            <TabsContent value="videos">
              <MediaGallery 
                bucket="videos" 
                selectable={true} 
                onSelect={handleMediaSelect}
                showDelete={true} 
              />
            </TabsContent>
          </Tabs>
        </Card>
        
        {selectedMedia && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-auto">
              <div className="p-4 border-b flex justify-between items-center">
                <h3 className="font-medium">{selectedMedia.name}</h3>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setSelectedMedia(null)}
                >
                  Fermer
                </Button>
              </div>
              <div className="p-6">
                {selectedMedia.content_type.startsWith('image/') ? (
                  <img 
                    src={selectedMedia.url} 
                    alt={selectedMedia.name} 
                    className="max-w-full max-h-[70vh] mx-auto"
                  />
                ) : selectedMedia.content_type.startsWith('video/') ? (
                  <video 
                    src={selectedMedia.url} 
                    controls 
                    className="max-w-full max-h-[70vh] mx-auto"
                  />
                ) : (
                  <p>Type de fichier non pris en charge</p>
                )}
                
                <div className="mt-4 space-y-2">
                  <p><strong>Description:</strong> {selectedMedia.description || 'Aucune description'}</p>
                  <p><strong>Type:</strong> {selectedMedia.content_type}</p>
                  <p><strong>URL:</strong> <a href={selectedMedia.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">{selectedMedia.url}</a></p>
                </div>
                
                <div className="mt-6 flex gap-2">
                  <Button 
                    onClick={() => {
                      navigator.clipboard.writeText(selectedMedia.url);
                      alert('URL copiée dans le presse-papier!');
                    }}
                  >
                    Copier l'URL
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      
      <Footer />
    </>
  );
};

export default MediaManager;
