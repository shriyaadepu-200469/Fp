
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Tile from "@/components/Tile";
import applications from "@/config/applications.json";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const Index = () => {
  const [items, setItems] = useState(applications.applications);

  const addNewTile = () => {
    const newTile = {
      id: `app${items.length + 1}`,
      title: `New Application ${items.length + 1}`,
      description: "Click to edit description",
      url: "#",
      icon: "App"
    };
    setItems([...items, newTile]);
  };

  return (
    <div className="min-h-screen relative">
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: 'url("/lovable-uploads/215e65e7-b77e-4f63-9bf4-0c995b82b8d4.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          maxHeight: '100vh',
          overflow: 'hidden'
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="relative z-10">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <div className="flex justify-end mb-4">
            <Button
              onClick={addNewTile}
              className="bg-[#800000] hover:bg-[#600000] text-white"
            >
              <Plus className="w-5 h-5 mr-2" />
              Add New Tile
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {items.map((app) => (
              <Tile
                key={app.id}
                title={app.title}
                description={app.description}
                url={app.url}
                icon={app.icon}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
