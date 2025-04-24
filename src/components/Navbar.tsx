
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  onMenuClick?: () => void;
}

const Navbar = ({ onMenuClick }: NavbarProps) => {
  return (
    <nav className="bg-[#800000] shadow-md">
      <div className="container mx-auto flex justify-between items-center py-2 px-4">
        <div className="flex items-center space-x-4">
          <Button 
            variant="ghost" 
            className="text-white hover:bg-white/10"
            onClick={onMenuClick}
          >
            <Menu className="h-6 w-6" />
          </Button>
          <div className="flex items-center gap-3">
            <img 
              src="/lovable-uploads/0646e817-12e4-436e-9372-13d2f35c9ef8.png" 
              alt="VNRVJIET Logo" 
              className="h-12"
            />
            <span className="text-white text-xl font-semibold">VNRVJIET</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="text-white hover:bg-white/10">
            Help
          </Button>
          <Button variant="ghost" className="text-white hover:bg-white/10">
            Settings
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
