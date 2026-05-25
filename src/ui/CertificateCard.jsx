import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { BiZoomIn } from "react-icons/bi";
import { useDarkModeShadow } from "../context/DarkModeShadow";

export default function CertificateCard({ certificate }) {
  const { darkModeShadow } = useDarkModeShadow();

  return (
    <PhotoProvider>
      <PhotoView src={certificate.imageSrc}>
        <div
          className="group relative overflow-hidden rounded-xl bg-secondary/30 border border-border transition-all duration-500 hover:scale-105 hover:shadow-xl cursor-pointer"
          style={{ boxShadow: darkModeShadow }}
        >
          <img
            src={certificate.thumbnailSrc}
            alt={certificate.title}
            className="w-full h-40 object-cover transition-all duration-500 group-hover:scale-110 group-hover:blur-md"
          />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
            <div className="bg-accent-primary rounded-full p-3 transform scale-0 group-hover:scale-100 transition-transform duration-300">
              <BiZoomIn className="text-white text-2xl" />
            </div>
          </div>
          <div className="p-3">
            <h3 className="text-text-primary font-semibold text-sm truncate">
              {certificate.title}
            </h3>
            <p className="text-text-secondary text-xs mt-1">
              {certificate.date}
            </p>
          </div>
        </div>
      </PhotoView>
    </PhotoProvider>
  );
}
