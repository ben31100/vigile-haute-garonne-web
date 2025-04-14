
import React, { useEffect, useState } from 'react';
import { getMedias } from '@/utils/mediaUtils';
import { Image, Film, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { deleteMedia } from '@/utils/mediaUtils';

export interface Media {
  id: string;
  name: string;
  description?: string;
  url: string;
  content_type: string;
  bucket_id: string;
  created_at: string;
}

interface MediaGalleryProps {
  bucket?: 'images' | 'videos';
  cityReference?: string;
  serviceReference?: string;
  limit?: number;
  onSelect?: (media: Media) => void;
  selectable?: boolean;
  showDelete?: boolean;
  onDelete?: (mediaId: string) => void;
}

const MediaGallery: React.FC<MediaGalleryProps> = ({
  bucket,
  cityReference,
  serviceReference,
  limit = 12,
  onSelect,
  selectable = false,
  showDelete = false,
  onDelete
}) => {
  const { toast } = useToast();
  const [medias, setMedias] = useState<Media[]>([]);
  const [loading, setLoading] = useState(true);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  
  const loadMedias = async (resetOffset = false) => {
    setLoading(true);
    const newOffset = resetOffset ? 0 : offset;
    
    const mediaData = await getMedias({
      bucket,
      cityReference,
      serviceReference,
      limit,
      offset: newOffset
    });
    
    setLoading(false);
    
    if (resetOffset) {
      setMedias(mediaData);
    } else {
      setMedias(prev => [...prev, ...mediaData]);
    }
    
    setHasMore(mediaData.length === limit);
    
    if (!resetOffset) {
      setOffset(prev => prev + limit);
    } else {
      setOffset(limit);
    }
  };
  
  useEffect(() => {
    loadMedias(true);
  }, [bucket, cityReference, serviceReference]);
  
  const handleMediaSelect = (media: Media) => {
    if (selectable && onSelect) {
      onSelect(media);
    }
  };
  
  const handleDelete = async (event: React.MouseEvent, mediaId: string) => {
    // Empêcher la propagation pour éviter la sélection
    event.stopPropagation();
    
    if (confirm('Êtes-vous sûr de vouloir supprimer ce média ?')) {
      const success = await deleteMedia(mediaId);
      
      if (success) {
        toast({
          title: "Suppression réussie",
          description: "Le média a été supprimé avec succès"
        });
        
        // Mettre à jour la liste des médias
        setMedias(prev => prev.filter(media => media.id !== mediaId));
        
        // Appeler le callback si fourni
        if (onDelete) {
          onDelete(mediaId);
        }
      } else {
        toast({
          title: "Erreur de suppression",
          description: "Une erreur est survenue lors de la suppression du média",
          variant: "destructive"
        });
      }
    }
  };
  
  const isImage = (contentType: string) => contentType.startsWith('image/');
  const isVideo = (contentType: string) => contentType.startsWith('video/');
  
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {medias.map(media => (
          <div
            key={media.id}
            className={`relative border rounded-lg overflow-hidden bg-gray-50 group ${selectable ? 'cursor-pointer hover:border-blue-500' : ''}`}
            onClick={() => handleMediaSelect(media)}
          >
            {isImage(media.content_type) ? (
              <>
                <div className="aspect-square overflow-hidden">
                  <img
                    src={media.url}
                    alt={media.name}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="absolute top-2 right-2">
                  <Image size={16} className="text-white drop-shadow-md" />
                </div>
              </>
            ) : isVideo(media.content_type) ? (
              <>
                <div className="aspect-square overflow-hidden bg-gray-900 flex items-center justify-center">
                  <video
                    src={media.url}
                    className="w-full h-full object-cover"
                    onMouseOver={e => (e.target as HTMLVideoElement).play()}
                    onMouseOut={e => {
                      (e.target as HTMLVideoElement).pause();
                      (e.target as HTMLVideoElement).currentTime = 0;
                    }}
                    muted
                    loop
                  />
                </div>
                <div className="absolute top-2 right-2">
                  <Film size={16} className="text-white drop-shadow-md" />
                </div>
              </>
            ) : (
              <div className="aspect-square flex items-center justify-center bg-gray-100">
                <p className="text-sm text-gray-500">Type non supporté</p>
              </div>
            )}
            
            <div className="p-2">
              <p className="text-sm font-medium truncate">{media.name}</p>
              {media.description && (
                <p className="text-xs text-gray-500 truncate">{media.description}</p>
              )}
            </div>
            
            {showDelete && (
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 left-2 bg-white/80 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={(e) => handleDelete(e, media.id)}
              >
                <Trash2 size={16} className="text-red-500" />
              </Button>
            )}
          </div>
        ))}
      </div>
      
      {medias.length === 0 && !loading && (
        <div className="py-8 text-center">
          <p className="text-gray-500">Aucun média trouvé</p>
        </div>
      )}
      
      {loading && (
        <div className="py-4 text-center">
          <p className="text-gray-500">Chargement...</p>
        </div>
      )}
      
      {hasMore && medias.length > 0 && (
        <div className="flex justify-center mt-4">
          <Button 
            variant="outline" 
            onClick={() => loadMedias(false)}
            disabled={loading}
          >
            Charger plus
          </Button>
        </div>
      )}
    </div>
  );
};

export default MediaGallery;
