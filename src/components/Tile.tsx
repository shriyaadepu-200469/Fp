
import { LucideIcon } from "lucide-react";
import * as Icons from "lucide-react";

interface TileProps {
  title: string;
  description: string;
  url: string;
  icon: string;
}

const Tile = ({ title, description, url, icon }: TileProps) => {
  const IconComponent = (Icons as any)[icon] as LucideIcon;

  return (
    <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 border-[#80000020] h-[200px] flex flex-col justify-between group">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-[#800000] mb-2 group-hover:text-[#600000]">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
        <IconComponent className="h-8 w-8 text-[#800000] group-hover:text-[#600000] transition-colors" />
      </div>
      <a
        href={url}
        className="mt-4 inline-block text-[#800000] hover:text-[#600000] font-medium transition-colors"
      >
        Launch Application →
      </a>
    </div>
  );
};

export default Tile;
