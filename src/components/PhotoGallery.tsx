
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Camera, Heart, MessageCircle, Share, MapPin, Calendar } from "lucide-react";

interface Photo {
  id: string;
  url: string;
  caption: string;
  location: string;
  date: string;
  likes: number;
  comments: number;
  rider: string;
}

interface PhotoGalleryProps {
  photos: Photo[];
  rideTitle?: string;
}

const PhotoGallery = ({ photos, rideTitle }: PhotoGalleryProps) => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const handlePhotoClick = (photo: Photo) => {
    setSelectedPhoto(photo);
  };

  return (
    <div className="space-y-4">
      {rideTitle && (
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">{rideTitle} Photos</h3>
          <Badge variant="secondary">{photos.length} photos</Badge>
        </div>
      )}
      
      <div className="grid grid-cols-3 gap-2">
        {photos.map((photo) => (
          <div
            key={photo.id}
            onClick={() => handlePhotoClick(photo)}
            className="aspect-square bg-gradient-to-br from-orange-200 to-orange-400 rounded-lg cursor-pointer hover:opacity-80 transition-opacity relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute bottom-1 left-1 text-white text-xs">
              <div className="flex items-center gap-1">
                <Heart className="w-3 h-3" />
                <span>{photo.likes}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedPhoto && (
        <Card>
          <CardContent className="p-4">
            <div className="aspect-video bg-gradient-to-br from-orange-200 to-orange-400 rounded-lg mb-3"></div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-xs font-medium text-orange-600">
                      {selectedPhoto.rider.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="text-sm font-medium">{selectedPhoto.rider}</div>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <MapPin className="w-3 h-3" />
                      <span>{selectedPhoto.location}</span>
                      <Calendar className="w-3 h-3" />
                      <span>{selectedPhoto.date}</span>
                    </div>
                  </div>
                </div>
                <Button size="sm" variant="ghost">
                  <Share className="w-4 h-4" />
                </Button>
              </div>
              
              <p className="text-sm text-gray-700">{selectedPhoto.caption}</p>
              
              <div className="flex items-center gap-4 text-sm text-gray-600 pt-2 border-t">
                <div className="flex items-center gap-1">
                  <Heart className="w-4 h-4" />
                  <span>{selectedPhoto.likes} likes</span>
                </div>
                <div className="flex items-center gap-1">
                  <MessageCircle className="w-4 h-4" />
                  <span>{selectedPhoto.comments} comments</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default PhotoGallery;
