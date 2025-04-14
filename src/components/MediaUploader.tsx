
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { UploadCloud, Image, Film, X } from 'lucide-react';
import { uploadMedia, UploadOptions, MediaType } from '@/utils/mediaUtils';
import { useToast } from '@/hooks/use-toast';

interface MediaUploaderProps {
  onUploadComplete?: (url: string, metadata: any) => void;
  acceptedMediaTypes?: MediaType[];
  cityReference?: string;
  serviceReference?: string;
  showDescription?: boolean;
  buttonText?: string;
}

const MediaUploader: React.FC<MediaUploaderProps> = ({
  onUploadComplete,
  acceptedMediaTypes = ['image', 'video'],
  cityReference,
  serviceReference,
  showDescription = true,
  buttonText = 'Télécharger un fichier'
}) => {
  const { toast } = useToast();
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const [bucket, setBucket] = useState<'images' | 'videos'>('images');
  const [description, setDescription] = useState('');
  const [folder, setFolder] = useState('');
  
  // Déterminer les types de fichiers acceptés selon les médias
  const getAcceptedFileTypes = () => {
    const types = [];
    if (acceptedMediaTypes.includes('image')) types.push('image/*');
    if (acceptedMediaTypes.includes('video')) types.push('video/*');
    return types.join(',');
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      
      // Détecter automatiquement le type de bucket
      if (selectedFile.type.startsWith('image/')) {
        setBucket('images');
      } else if (selectedFile.type.startsWith('video/')) {
        setBucket('videos');
      }
      
      // Créer un aperçu du fichier
      if (selectedFile.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (event) => {
          setPreview(event.target?.result as string);
        };
        reader.readAsDataURL(selectedFile);
      } else if (selectedFile.type.startsWith('video/')) {
        // Pour les vidéos, on utilise l'URL de l'objet
        setPreview(URL.createObjectURL(selectedFile));
      }
    }
  };
  
  const clearFile = () => {
    setFile(null);
    setPreview(null);
    if (preview && preview.startsWith('blob:')) {
      URL.revokeObjectURL(preview);
    }
  };
  
  const handleUpload = async () => {
    if (!file) {
      toast({
        title: "Erreur",
        description: "Veuillez sélectionner un fichier à télécharger",
        variant: "destructive"
      });
      return;
    }
    
    setIsUploading(true);
    
    const options: UploadOptions = {
      bucket,
      folder: folder || undefined,
      description: description || undefined,
      isPublic: true,
      cityReference,
      serviceReference
    };
    
    const result = await uploadMedia(file, options);
    
    setIsUploading(false);
    
    if (result) {
      toast({
        title: "Succès",
        description: "Le fichier a été téléchargé avec succès",
      });
      
      // Appeler la fonction de callback avec les données
      if (onUploadComplete) {
        onUploadComplete(result.url, result.metadata);
      }
      
      // Réinitialiser le formulaire
      clearFile();
      setDescription('');
      setFolder('');
    } else {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors du téléchargement",
        variant: "destructive"
      });
    }
  };
  
  return (
    <div className="space-y-4 p-4 border rounded-lg">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">Télécharger un média</h3>
        <div className="flex items-center space-x-2">
          <Image size={18} className={bucket === 'images' ? 'text-blue-500' : 'text-gray-400'} />
          <Film size={18} className={bucket === 'videos' ? 'text-blue-500' : 'text-gray-400'} />
        </div>
      </div>
      
      {!file ? (
        <div 
          className="border-2 border-dashed rounded-lg p-8 text-center hover:bg-gray-50 transition-colors cursor-pointer"
          onClick={() => document.getElementById('file-upload')?.click()}
        >
          <UploadCloud className="mx-auto h-12 w-12 text-gray-400" />
          <div className="mt-2">
            <p className="text-sm text-gray-600">
              Cliquez ou glissez-déposez un fichier ici
            </p>
            <p className="text-xs text-gray-500 mt-1">
              {acceptedMediaTypes.includes('image') && 'Images (JPG, PNG, GIF) '}
              {acceptedMediaTypes.includes('image') && acceptedMediaTypes.includes('video') && '- '}
              {acceptedMediaTypes.includes('video') && 'Vidéos (MP4, WebM)'}
            </p>
          </div>
          <Input
            id="file-upload"
            type="file"
            className="hidden"
            accept={getAcceptedFileTypes()}
            onChange={handleFileChange}
          />
        </div>
      ) : (
        <div className="relative border rounded-lg overflow-hidden">
          {preview && (
            file.type.startsWith('image/') ? (
              <img
                src={preview}
                alt="Aperçu"
                className="w-full h-48 object-contain bg-gray-100"
              />
            ) : (
              <video
                src={preview}
                controls
                className="w-full h-48 object-contain bg-gray-100"
              />
            )
          )}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 bg-white/80 hover:bg-white"
            onClick={clearFile}
          >
            <X size={16} />
          </Button>
          <div className="p-3">
            <p className="text-sm font-medium truncate">{file.name}</p>
            <p className="text-xs text-gray-500">{(file.size / 1024).toFixed(1)} Ko</p>
          </div>
        </div>
      )}
      
      <div className="space-y-3">
        <div>
          <Label htmlFor="bucket">Type de média</Label>
          <Select value={bucket} onValueChange={(value: 'images' | 'videos') => setBucket(value)}>
            <SelectTrigger>
              <SelectValue placeholder="Sélectionner un type" />
            </SelectTrigger>
            <SelectContent>
              {acceptedMediaTypes.includes('image') && (
                <SelectItem value="images">Image</SelectItem>
              )}
              {acceptedMediaTypes.includes('video') && (
                <SelectItem value="videos">Vidéo</SelectItem>
              )}
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <Label htmlFor="folder">Dossier (optionnel)</Label>
          <Input
            id="folder"
            placeholder="Ex: ville/toulouse"
            value={folder}
            onChange={(e) => setFolder(e.target.value)}
          />
        </div>
        
        {showDescription && (
          <div>
            <Label htmlFor="description">Description (optionnelle)</Label>
            <Textarea
              id="description"
              placeholder="Description du média..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        )}
        
        <Button 
          onClick={handleUpload} 
          disabled={!file || isUploading}
          className="w-full"
        >
          {isUploading ? 'Téléchargement en cours...' : buttonText}
        </Button>
      </div>
    </div>
  );
};

export default MediaUploader;
