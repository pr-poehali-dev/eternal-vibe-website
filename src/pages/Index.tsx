import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Gamepad2" size={28} className="text-primary" />
              <h1 className="text-2xl font-oswald font-bold text-primary">ETERNA VIBE</h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="font-roboto hover:text-primary transition-colors">Home</a>
              <a href="#updates" className="font-roboto hover:text-primary transition-colors">Updates</a>
              <a href="#coming" className="font-roboto hover:text-primary transition-colors">Coming</a>
              <a href="#devlogs" className="font-roboto hover:text-primary transition-colors">Dev logs</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="mb-8">
            <img 
              src="/img/fd38dcd3-0ae4-4b86-9a85-78e691ceecc4.jpg" 
              alt="Eterna Vibe Logo" 
              className="w-32 h-32 mx-auto mb-6 rounded-xl border-2 border-primary/20"
            />
          </div>
          <div className="roblox-gradient bg-clip-text text-transparent">
            <h1 className="text-6xl md:text-8xl font-oswald font-bold mb-6">ETERNA VIBE</h1>
          </div>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-roboto max-w-3xl mx-auto">
            Experience the ultimate Roblox adventure in a world where vibes never die. Build, explore, and conquer in Eterna Vibe!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-roboto">
              <Icon name="Play" size={20} className="mr-2" />
              Play Now
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-6 text-lg font-roboto">
              <Icon name="Users" size={20} className="mr-2" />
              Join Discord
            </Button>
          </div>
        </div>
      </section>

      {/* Updates Section */}
      <section id="updates" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-oswald font-bold mb-4">Update Log</h2>
            <p className="text-xl text-muted-foreground font-roboto">Latest improvements and features</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="game-card">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge className="bg-primary text-primary-foreground">New</Badge>
                  <Icon name="Building" size={24} className="text-primary" />
                </div>
                <CardTitle className="font-oswald text-2xl">Update Top Floor</CardTitle>
                <CardDescription className="font-roboto">Enhanced building mechanics and new floor designs</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-roboto">
                  Experience improved construction tools and stunning architectural elements for your top floors.
                </p>
              </CardContent>
            </Card>

            <Card className="game-card">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge className="bg-secondary text-secondary-foreground">Updated</Badge>
                  <Icon name="Backpack" size={24} className="text-secondary" />
                </div>
                <CardTitle className="font-oswald text-2xl">New Backpack GUI</CardTitle>
                <CardDescription className="font-roboto">Redesigned inventory interface</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-roboto">
                  Navigate your items with ease using our sleek, intuitive backpack interface.
                </p>
              </CardContent>
            </Card>

            <Card className="game-card">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge className="bg-accent text-accent-foreground">Fresh</Badge>
                  <Icon name="Menu" size={24} className="text-accent" />
                </div>
                <CardTitle className="font-oswald text-2xl">New Start Menu</CardTitle>
                <CardDescription className="font-roboto">Streamlined game entry experience</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-roboto">
                  Jump into action faster with our revamped, user-friendly start menu system.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section id="coming" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-oswald font-bold mb-4">Coming Soon Updates</h2>
            <p className="text-xl text-muted-foreground font-roboto">Exciting features on the horizon</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="game-card bg-gradient-to-r from-orange-500/10 to-purple-500/10 border-orange-500/20 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <img 
                  src="/img/bdd60934-d530-4bca-8501-2cdb78918160.jpg" 
                  alt="Halloween Update Preview" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader className="text-center relative z-10">
                <div className="flex items-center justify-center mb-4">
                  <Icon name="Ghost" size={48} className="text-orange-500 mr-4" />
                  <Badge className="bg-orange-500 text-white text-lg px-4 py-2">3 Days Left</Badge>
                </div>
                <CardTitle className="font-oswald text-4xl md:text-5xl text-orange-500">Halloween Update</CardTitle>
                <CardDescription className="font-roboto text-lg">Spooky season is coming to Eterna Vibe</CardDescription>
              </CardHeader>
              <CardContent className="text-center relative z-10">
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div className="flex flex-col items-center">
                    <Icon name="Skull" size={32} className="text-orange-400 mb-2" />
                    <h4 className="font-oswald text-lg">Haunted Areas</h4>
                    <p className="text-sm text-muted-foreground font-roboto">Explore spooky new locations</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <Icon name="Shirt" size={32} className="text-purple-400 mb-2" />
                    <h4 className="font-oswald text-lg">Halloween Skins</h4>
                    <p className="text-sm text-muted-foreground font-roboto">Dress up in scary costumes</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <Icon name="Gift" size={32} className="text-orange-400 mb-2" />
                    <h4 className="font-oswald text-lg">Special Rewards</h4>
                    <p className="text-sm text-muted-foreground font-roboto">Unlock exclusive items</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Dev Logs Section */}
      <section id="devlogs" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-oswald font-bold mb-4">Dev Logs</h2>
            <p className="text-xl text-muted-foreground font-roboto">Behind the scenes development updates</p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="game-card">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Icon name="Code" size={24} className="text-primary" />
                    <div>
                      <CardTitle className="font-oswald text-xl">Performance Optimizations</CardTitle>
                      <CardDescription className="font-roboto">September 14, 2024</CardDescription>
                    </div>
                  </div>
                  <Badge variant="outline">In Progress</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-roboto">
                  Working on major performance improvements to reduce lag and enhance gameplay smoothness. 
                  Expect 40% better frame rates in the next update.
                </p>
              </CardContent>
            </Card>

            <Card className="game-card">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Icon name="Palette" size={24} className="text-secondary" />
                    <div>
                      <CardTitle className="font-oswald text-xl">UI/UX Redesign</CardTitle>
                      <CardDescription className="font-roboto">September 10, 2024</CardDescription>
                    </div>
                  </div>
                  <Badge className="bg-green-500 text-white">Completed</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-roboto">
                  Complete overhaul of the user interface for better accessibility and modern design principles. 
                  New color scheme and improved navigation flow.
                </p>
              </CardContent>
            </Card>

            <Card className="game-card">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Icon name="Users" size={24} className="text-accent" />
                    <div>
                      <CardTitle className="font-oswald text-xl">Multiplayer Enhancements</CardTitle>
                      <CardDescription className="font-roboto">September 8, 2024</CardDescription>
                    </div>
                  </div>
                  <Badge variant="outline">Planning</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-roboto">
                  Exploring new ways to improve multiplayer experience with better server stability 
                  and enhanced social features for the community.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Icon name="Gamepad2" size={28} className="text-primary" />
              <h3 className="text-2xl font-oswald font-bold text-primary">ETERNA VIBE</h3>
            </div>
            <p className="text-muted-foreground font-roboto mb-6">
              Join thousands of players in the ultimate Roblox experience
            </p>
            <div className="flex justify-center space-x-6">
              <Button variant="ghost" size="sm">
                <Icon name="MessageCircle" size={16} className="mr-2" />
                Discord
              </Button>
              <Button variant="ghost" size="sm">
                <Icon name="Twitter" size={16} className="mr-2" />
                Twitter
              </Button>
              <Button variant="ghost" size="sm">
                <Icon name="Youtube" size={16} className="mr-2" />
                YouTube
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;