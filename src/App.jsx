import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin, Phone, Clock, Facebook, Instagram, Wine, Users, Moon, Music, Utensils, Award } from 'lucide-react';

export default function TheFatGreekWebsite() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    {
      name: 'Slow-Roasted Lamb Shanks',
      description: 'Fall-off-the-bone tender, aromatic herbs, rich wine reduction',
      price: 'R185',
      category: 'Mains'
    },
    {
      name: 'Grilled Calamari',
      description: 'Char-grilled perfection, lemon & herb marinade, tzatziki',
      price: 'R95',
      category: 'Starters'
    },
    {
      name: 'Mediterranean Mussels',
      description: 'White wine, garlic, tomato, fresh herbs, crusty bread',
      price: 'R110',
      category: 'Seafood'
    },
    {
      name: 'Traditional Baklava',
      description: 'Layers of filo, honey-soaked, crushed pistachios, vanilla ice cream',
      price: 'R65',
      category: 'Desserts'
    }
  ];

  return (
    <div style={{
      fontFamily: '"Source Sans 3", sans-serif',
      margin: 0,
      padding: 0,
      backgroundColor: '#1A2A3A',
      color: '#E6E2DC',
      overflowX: 'hidden'
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Source+Sans+3:wght@300;400;600;700&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .fade-in {
          animation: fadeIn 0.8s ease-out forwards;
          opacity: 0;
        }

        @keyframes fadeIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .slide-up {
          animation: slideUp 0.6s ease-out forwards;
          opacity: 0;
          transform: translateY(20px);
        }

        @keyframes slideUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .delay-1 { animation-delay: 0.1s; }
        .delay-2 { animation-delay: 0.2s; }
        .delay-3 { animation-delay: 0.3s; }
        .delay-4 { animation-delay: 0.4s; }

        .hover-lift {
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .hover-lift:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .btn-glow:hover {
          box-shadow: 0 0 20px rgba(79, 163, 209, 0.4);
        }

        .greek-pattern {
          background-image: 
            linear-gradient(45deg, rgba(47, 143, 157, 0.03) 25%, transparent 25%),
            linear-gradient(-45deg, rgba(47, 143, 157, 0.03) 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, rgba(47, 143, 157, 0.03) 75%),
            linear-gradient(-45deg, transparent 75%, rgba(47, 143, 157, 0.03) 75%);
          background-size: 40px 40px;
          background-position: 0 0, 0 20px, 20px -20px, -20px 0px;
        }
      `}</style>

      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 1000,
        backgroundColor: scrolled ? 'rgba(26, 42, 58, 0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        borderBottom: scrolled ? '1px solid rgba(47, 143, 157, 0.2)' : 'none'
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: scrolled ? '16px 24px' : '24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          transition: 'padding 0.3s ease'
        }}>
          <div style={{
            fontFamily: '"Cinzel", serif',
            fontSize: scrolled ? '24px' : '28px',
            fontWeight: 700,
            color: '#4FA3D1',
            letterSpacing: '0.05em',
            transition: 'font-size 0.3s ease'
          }}>
            THE FAT GREEK
          </div>

          {/* Desktop Menu */}
          <div style={{
            display: 'flex',
            gap: '40px',
            alignItems: 'center'
          }} className="desktop-menu">
            <a href="#about" style={{
              color: '#E6E2DC',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: 500,
              transition: 'color 0.3s ease'
            }} onMouseEnter={(e) => e.target.style.color = '#2F8F9D'}
               onMouseLeave={(e) => e.target.style.color = '#E6E2DC'}>
              About
            </a>
            <a href="#menu" style={{
              color: '#E6E2DC',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: 500,
              transition: 'color 0.3s ease'
            }} onMouseEnter={(e) => e.target.style.color = '#2F8F9D'}
               onMouseLeave={(e) => e.target.style.color = '#E6E2DC'}>
              Menu
            </a>
            <a href="#gallery" style={{
              color: '#E6E2DC',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: 500,
              transition: 'color 0.3s ease'
            }} onMouseEnter={(e) => e.target.style.color = '#2F8F9D'}
               onMouseLeave={(e) => e.target.style.color = '#E6E2DC'}>
              Gallery
            </a>
            <a href="#contact" style={{
              color: '#E6E2DC',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: 500,
              transition: 'color 0.3s ease'
            }} onMouseEnter={(e) => e.target.style.color = '#2F8F9D'}
               onMouseLeave={(e) => e.target.style.color = '#E6E2DC'}>
              Contact
            </a>
            <a href="tel:+27123456789" style={{
              backgroundColor: '#2F8F9D',
              color: '#FFFFFF',
              padding: '12px 24px',
              borderRadius: '999px',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: 600,
              transition: 'all 0.3s ease'
            }} className="btn-glow"
               onMouseEnter={(e) => {
                 e.target.style.backgroundColor = '#1E3F66';
                 e.target.style.transform = 'scale(1.05)';
               }}
               onMouseLeave={(e) => {
                 e.target.style.backgroundColor = '#2F8F9D';
                 e.target.style.transform = 'scale(1)';
               }}>
              Book a Table
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: '#E6E2DC',
            cursor: 'pointer'
          }} className="mobile-menu-btn">
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div style={{
            backgroundColor: '#1E3F66',
            padding: '24px',
            display: 'none'
          }} className="mobile-menu">
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px'
            }}>
              <a href="#about" style={{
                color: '#E6E2DC',
                textDecoration: 'none',
                fontSize: '18px',
                padding: '12px 0',
                borderBottom: '1px solid rgba(230, 226, 220, 0.1)'
              }} onClick={() => setMobileMenuOpen(false)}>
                About
              </a>
              <a href="#menu" style={{
                color: '#E6E2DC',
                textDecoration: 'none',
                fontSize: '18px',
                padding: '12px 0',
                borderBottom: '1px solid rgba(230, 226, 220, 0.1)'
              }} onClick={() => setMobileMenuOpen(false)}>
                Menu
              </a>
              <a href="#gallery" style={{
                color: '#E6E2DC',
                textDecoration: 'none',
                fontSize: '18px',
                padding: '12px 0',
                borderBottom: '1px solid rgba(230, 226, 220, 0.1)'
              }} onClick={() => setMobileMenuOpen(false)}>
                Gallery
              </a>
              <a href="#contact" style={{
                color: '#E6E2DC',
                textDecoration: 'none',
                fontSize: '18px',
                padding: '12px 0',
                borderBottom: '1px solid rgba(230, 226, 220, 0.1)'
              }} onClick={() => setMobileMenuOpen(false)}>
                Contact
              </a>
              <a href="tel:+27123456789" style={{
                backgroundColor: '#2F8F9D',
                color: '#FFFFFF',
                padding: '16px',
                borderRadius: '999px',
                textDecoration: 'none',
                fontSize: '16px',
                fontWeight: 600,
                textAlign: 'center',
                marginTop: '8px'
              }}>
                Book a Table
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #1E3F66 0%, #1A2A3A 50%, #2F8F9D 100%)'
      }}>
        {/* Background Pattern */}
        <div className="greek-pattern" style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.3
        }}></div>

        {/* Ambient Glow Effects */}
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(79, 163, 209, 0.15) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          animation: 'float 8s ease-in-out infinite'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '20%',
          right: '10%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(47, 143, 157, 0.12) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(80px)',
          animation: 'float 10s ease-in-out infinite reverse'
        }}></div>

        <style>{`
          @keyframes float {
            0%, 100% { transform: translate(0, 0); }
            50% { transform: translate(30px, -30px); }
          }
        `}</style>

        <div style={{
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
          padding: '0 24px',
          maxWidth: '900px'
        }}>
          <h1 className="fade-in" style={{
            fontFamily: '"Cinzel", serif',
            fontSize: 'clamp(48px, 8vw, 72px)',
            fontWeight: 700,
            color: '#E6E2DC',
            marginBottom: '24px',
            lineHeight: 1.1,
            letterSpacing: '0.02em'
          }}>
            Greek Flavours Await
          </h1>
          <p className="fade-in delay-1" style={{
            fontSize: 'clamp(18px, 3vw, 24px)',
            color: '#CFCAC2',
            marginBottom: '48px',
            fontWeight: 300,
            letterSpacing: '0.03em'
          }}>
            Come hungry, leave happy
          </p>
          <div className="fade-in delay-2" style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <a href="tel:+27123456789" style={{
              backgroundColor: '#2F8F9D',
              color: '#FFFFFF',
              padding: '18px 40px',
              borderRadius: '999px',
              textDecoration: 'none',
              fontSize: '18px',
              fontWeight: 600,
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              display: 'inline-block'
            }} className="btn-glow"
               onMouseEnter={(e) => {
                 e.target.style.backgroundColor = '#1E3F66';
                 e.target.style.transform = 'scale(1.05)';
               }}
               onMouseLeave={(e) => {
                 e.target.style.backgroundColor = '#2F8F9D';
                 e.target.style.transform = 'scale(1)';
               }}>
              Book a Table
            </a>
            <a href="#menu" style={{
              backgroundColor: 'transparent',
              color: '#2F8F9D',
              padding: '18px 40px',
              borderRadius: '999px',
              textDecoration: 'none',
              fontSize: '18px',
              fontWeight: 600,
              border: '2px solid #2F8F9D',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              display: 'inline-block'
            }}
               onMouseEnter={(e) => {
                 e.target.style.backgroundColor = '#2F8F9D';
                 e.target.style.color = '#FFFFFF';
               }}
               onMouseLeave={(e) => {
                 e.target.style.backgroundColor = 'transparent';
                 e.target.style.color = '#2F8F9D';
               }}>
              View Menu
            </a>
          </div>

          {/* Trust Indicator */}
          <div className="fade-in delay-3" style={{
            marginTop: '64px',
            padding: '24px',
            backgroundColor: 'rgba(30, 63, 102, 0.3)',
            backdropFilter: 'blur(10px)',
            borderRadius: '16px',
            border: '1px solid rgba(79, 163, 209, 0.2)'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '32px',
              flexWrap: 'wrap'
            }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: '32px',
                  fontWeight: 700,
                  color: '#4FA3D1',
                  fontFamily: '"Cinzel", serif'
                }}>4.8★</div>
                <div style={{ fontSize: '14px', color: '#CFCAC2', marginTop: '4px' }}>Google Reviews</div>
              </div>
              <div style={{ width: '1px', height: '40px', backgroundColor: 'rgba(207, 202, 194, 0.3)' }}></div>
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: '32px',
                  fontWeight: 700,
                  color: '#4FA3D1',
                  fontFamily: '"Cinzel", serif'
                }}>10+</div>
                <div style={{ fontSize: '14px', color: '#CFCAC2', marginTop: '4px' }}>Years Serving</div>
              </div>
              <div style={{ width: '1px', height: '40px', backgroundColor: 'rgba(207, 202, 194, 0.3)' }}></div>
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: '32px',
                  fontWeight: 700,
                  color: '#4FA3D1',
                  fontFamily: '"Cinzel", serif'
                }}>∞</div>
                <div style={{ fontSize: '14px', color: '#CFCAC2', marginTop: '4px' }}>Happy Customers</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          animation: 'bounce 2s infinite'
        }}>
          <style>{`
            @keyframes bounce {
              0%, 100% { transform: translateX(-50%) translateY(0); }
              50% { transform: translateX(-50%) translateY(10px); }
            }
          `}</style>
          <div style={{
            width: '2px',
            height: '40px',
            backgroundColor: 'rgba(79, 163, 209, 0.5)',
            margin: '0 auto'
          }}></div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={{
        padding: '96px 24px',
        backgroundColor: '#1A2A3A'
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '64px',
            alignItems: 'center'
          }}>
            <div className="slide-up">
              <div style={{
                width: '80px',
                height: '4px',
                backgroundColor: '#C9A24D',
                marginBottom: '24px'
              }}></div>
              <h2 style={{
                fontFamily: '"Cinzel", serif',
                fontSize: 'clamp(36px, 5vw, 48px)',
                fontWeight: 600,
                color: '#E6E2DC',
                marginBottom: '24px',
                lineHeight: 1.2
              }}>
                A Greek Night in Kimberley
              </h2>
              <p style={{
                fontSize: '18px',
                lineHeight: 1.7,
                color: '#CFCAC2',
                marginBottom: '24px'
              }}>
                Step into The Fat Greek and experience the warmth of Mediterranean hospitality. Our story began with a simple passion: sharing authentic Greek flavours in an atmosphere that captures the spirit of a Greek evening.
              </p>
              <p style={{
                fontSize: '18px',
                lineHeight: 1.7,
                color: '#CFCAC2',
                marginBottom: '32px'
              }}>
                From our slow-roasted lamb shanks to fresh Mediterranean seafood, every dish is crafted with traditional techniques and bold, unforgettable flavours. This isn't just dinner—it's an experience.
              </p>
              <div style={{
                display: 'flex',
                gap: '12px',
                flexWrap: 'wrap'
              }}>
                <div style={{
                  padding: '8px 16px',
                  backgroundColor: 'rgba(47, 143, 157, 0.2)',
                  borderRadius: '999px',
                  fontSize: '14px',
                  color: '#4FA3D1',
                  border: '1px solid rgba(47, 143, 157, 0.3)'
                }}>
                  Authentic Greek Cuisine
                </div>
                <div style={{
                  padding: '8px 16px',
                  backgroundColor: 'rgba(47, 143, 157, 0.2)',
                  borderRadius: '999px',
                  fontSize: '14px',
                  color: '#4FA3D1',
                  border: '1px solid rgba(47, 143, 157, 0.3)'
                }}>
                  Evening Atmosphere
                </div>
                <div style={{
                  padding: '8px 16px',
                  backgroundColor: 'rgba(47, 143, 157, 0.2)',
                  borderRadius: '999px',
                  fontSize: '14px',
                  color: '#4FA3D1',
                  border: '1px solid rgba(47, 143, 157, 0.3)'
                }}>
                  Warm Hospitality
                </div>
              </div>
            </div>

            <div className="slide-up delay-2" style={{
              position: 'relative'
            }}>
              <div style={{
                backgroundColor: '#E6E2DC',
                borderRadius: '16px',
                padding: '32px',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
                border: '1px solid rgba(201, 162, 77, 0.2)'
              }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  backgroundColor: '#2F8F9D',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '24px'
                }}>
                  <Award size={40} color="#FFFFFF" />
                </div>
                <h3 style={{
                  fontFamily: '"Cinzel", serif',
                  fontSize: '24px',
                  fontWeight: 600,
                  color: '#1E3F66',
                  marginBottom: '16px'
                }}>
                  Traditional Recipes, Modern Touch
                </h3>
                <p style={{
                  fontSize: '16px',
                  lineHeight: 1.6,
                  color: '#2B2E34'
                }}>
                  Our chefs honor time-tested Greek culinary traditions while adding contemporary flair to create dishes that are both authentic and exciting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Highlights Section */}
      <section id="menu" style={{
        padding: '96px 24px',
        background: 'linear-gradient(180deg, #1A2A3A 0%, #1E3F66 100%)',
        position: 'relative'
      }}>
        <div className="greek-pattern" style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.1
        }}></div>

        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '64px'
          }}>
            <div style={{
              width: '80px',
              height: '4px',
              backgroundColor: '#C9A24D',
              margin: '0 auto 24px'
            }}></div>
            <h2 className="slide-up" style={{
              fontFamily: '"Cinzel", serif',
              fontSize: 'clamp(36px, 5vw, 48px)',
              fontWeight: 600,
              color: '#E6E2DC',
              marginBottom: '16px'
            }}>
              Tonight's Favourites
            </h2>
            <p className="slide-up delay-1" style={{
              fontSize: '18px',
              color: '#CFCAC2',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Signature dishes that keep our guests coming back
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '32px'
          }}>
            {menuItems.map((item, index) => (
              <div key={index} className={`slide-up delay-${index + 1} hover-lift`} style={{
                backgroundColor: '#E6E2DC',
                borderRadius: '16px',
                padding: '32px',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  padding: '8px 16px',
                  backgroundColor: '#2F8F9D',
                  color: '#FFFFFF',
                  fontSize: '12px',
                  fontWeight: 600,
                  borderBottomLeftRadius: '12px',
                  letterSpacing: '0.05em'
                }}>
                  {item.category}
                </div>
                <h3 style={{
                  fontFamily: '"Cinzel", serif',
                  fontSize: '22px',
                  fontWeight: 600,
                  color: '#1E3F66',
                  marginBottom: '12px',
                  marginTop: '24px'
                }}>
                  {item.name}
                </h3>
                <p style={{
                  fontSize: '15px',
                  lineHeight: 1.6,
                  color: '#2B2E34',
                  marginBottom: '20px',
                  minHeight: '72px'
                }}>
                  {item.description}
                </p>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingTop: '16px',
                  borderTop: '1px solid rgba(47, 143, 157, 0.2)'
                }}>
                  <span style={{
                    fontFamily: '"Cinzel", serif',
                    fontSize: '24px',
                    fontWeight: 700,
                    color: '#C9A24D'
                  }}>
                    {item.price}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div style={{
            textAlign: 'center',
            marginTop: '64px'
          }}>
            <a href="tel:+27123456789" style={{
              backgroundColor: 'transparent',
              color: '#4FA3D1',
              padding: '16px 40px',
              borderRadius: '999px',
              textDecoration: 'none',
              fontSize: '18px',
              fontWeight: 600,
              border: '2px solid #4FA3D1',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              display: 'inline-block'
            }}
               onMouseEnter={(e) => {
                 e.target.style.backgroundColor = '#4FA3D1';
                 e.target.style.color = '#FFFFFF';
               }}
               onMouseLeave={(e) => {
                 e.target.style.backgroundColor = 'transparent';
                 e.target.style.color = '#4FA3D1';
               }}>
              Call for Full Menu
            </a>
          </div>
        </div>
      </section>

      {/* Atmosphere Section */}
      <section style={{
        padding: '96px 24px',
        backgroundColor: '#1A2A3A'
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto'
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '64px'
          }}>
            <h2 className="slide-up" style={{
              fontFamily: '"Cinzel", serif',
              fontSize: 'clamp(36px, 5vw, 48px)',
              fontWeight: 600,
              color: '#E6E2DC',
              marginBottom: '16px'
            }}>
              Sip, Share, Enjoy
            </h2>
            <p className="slide-up delay-1" style={{
              fontSize: '18px',
              color: '#CFCAC2',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              An evening dining destination where memories are made
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '32px'
          }}>
            {[
              { Icon: Wine, title: 'Curated Wine Selection', desc: 'Mediterranean wines to complement every dish' },
              { Icon: Users, title: 'Perfect for Groups', desc: 'Intimate booths and communal tables' },
              { Icon: Moon, title: 'Evening Ambiance', desc: 'Atmospheric lighting and warm hospitality' },
              { Icon: Music, title: 'Live Entertainment', desc: 'Select evenings feature live Greek music' }
            ].map((item, index) => {
              const IconComponent = item.Icon;
              return (
                <div key={index} className={`slide-up delay-${index + 1}`} style={{
                  textAlign: 'center',
                  padding: '32px 24px'
                }}>
                  <div style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(47, 143, 157, 0.2)',
                    border: '2px solid rgba(47, 143, 157, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px'
                  }}>
                    <IconComponent size={36} color="#4FA3D1" />
                  </div>
                  <h3 style={{
                    fontFamily: '"Cinzel", serif',
                    fontSize: '20px',
                    fontWeight: 600,
                    color: '#E6E2DC',
                    marginBottom: '12px'
                  }}>
                    {item.title}
                  </h3>
                  <p style={{
                    fontSize: '15px',
                    color: '#CFCAC2',
                    lineHeight: 1.6
                  }}>
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" style={{
        padding: '96px 24px',
        backgroundColor: '#1A2A3A'
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto'
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '64px'
          }}>
            <div style={{
              width: '80px',
              height: '4px',
              backgroundColor: '#C9A24D',
              margin: '0 auto 24px'
            }}></div>
            <h2 className="slide-up" style={{
              fontFamily: '"Cinzel", serif',
              fontSize: 'clamp(36px, 5vw, 48px)',
              fontWeight: 600,
              color: '#E6E2DC',
              marginBottom: '16px'
            }}>
              Experience the Atmosphere
            </h2>
            <p className="slide-up delay-1" style={{
              fontSize: '18px',
              color: '#CFCAC2',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              A glimpse into our evening dining experience
            </p>
          </div>

          {/* Gallery Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px'
          }}>
            {/* Gallery Item 1 - Large Featured */}
            <div className="slide-up delay-1 hover-lift" style={{
              gridColumn: 'span 2',
              position: 'relative',
              borderRadius: '16px',
              overflow: 'hidden',
              backgroundColor: '#2F8F9D',
              height: '400px',
              cursor: 'pointer'
            }}>
              <img src="./food.jpg" alt="Signature Dish" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0, zIndex: 0 }} />
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(135deg, rgba(30, 63, 102, 0.8) 0%, rgba(47, 143, 157, 0.6) 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                padding: '40px',
                textAlign: 'center',
                zIndex: 1
              }}>
                <Utensils size={64} color="#E6E2DC" style={{ marginBottom: '20px' }} />
                <h3 style={{
                  fontFamily: '"Cinzel", serif',
                  fontSize: '28px',
                  fontWeight: 600,
                  color: '#E6E2DC',
                  marginBottom: '12px'
                }}>
                  Signature Dishes
                </h3>
                <p style={{
                  fontSize: '16px',
                  color: '#CFCAC2'
                }}>
                  Authentic Greek flavours crafted with passion
                </p>
              </div>
            </div>
            {/* Gallery Item 2 */}
            <div className="slide-up delay-2 hover-lift" style={{
              position: 'relative',
              borderRadius: '16px',
              overflow: 'hidden',
              backgroundColor: '#1E3F66',
              height: '400px',
              cursor: 'pointer'
            }}>
              <img src="/interior.jpg" alt="Evening Ambiance" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0, zIndex: 0 }} />
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(180deg, rgba(26, 42, 58, 0.6) 0%, rgba(30, 63, 102, 0.9) 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                padding: '32px',
                textAlign: 'center',
                zIndex: 1
              }}>
                <Moon size={48} color="#4FA3D1" style={{ marginBottom: '16px' }} />
                <h3 style={{
                  fontFamily: '"Cinzel", serif',
                  fontSize: '22px',
                  fontWeight: 600,
                  color: '#E6E2DC',
                  marginBottom: '8px'
                }}>
                  Evening Ambiance
                </h3>
                <p style={{
                  fontSize: '15px',
                  color: '#CFCAC2'
                }}>
                  Atmospheric lighting & warm tones
                </p>
              </div>
            </div>
            {/* Gallery Item 3 */}
            <div className="slide-up delay-2 hover-lift" style={{
              position: 'relative',
              borderRadius: '16px',
              overflow: 'hidden',
              backgroundColor: '#4FA3D1',
              height: '280px',
              cursor: 'pointer'
            }}>
              <img src="/wine.jpg" alt="Wine Selection" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0, zIndex: 0 }} />
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(135deg, rgba(47, 143, 157, 0.8) 0%, rgba(79, 163, 209, 0.7) 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                padding: '32px',
                textAlign: 'center',
                zIndex: 1
              }}>
                <Wine size={48} color="#FFFFFF" style={{ marginBottom: '16px' }} />
                <h3 style={{
                  fontFamily: '"Cinzel", serif',
                  fontSize: '22px',
                  fontWeight: 600,
                  color: '#FFFFFF',
                  marginBottom: '8px'
                }}>
                  Wine Selection
                </h3>
                <p style={{
                  fontSize: '15px',
                  color: '#E6E2DC'
                }}>
                  Curated Mediterranean wines
                </p>
              </div>
            </div>
            {/* Gallery Item 4 */}
            <div className="slide-up delay-3 hover-lift" style={{
              position: 'relative',
              borderRadius: '16px',
              overflow: 'hidden',
              backgroundColor: '#C9A24D',
              height: '280px',
              cursor: 'pointer'
            }}>
              <img src="/food2.jpg" alt="Award Winning" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0, zIndex: 0 }} />
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(135deg, rgba(201, 162, 77, 0.8) 0%, rgba(201, 162, 77, 0.6) 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                padding: '32px',
                textAlign: 'center',
                zIndex: 1
              }}>
                <Award size={48} color="#1E3F66" style={{ marginBottom: '16px' }} />
                <h3 style={{
                  fontFamily: '"Cinzel", serif',
                  fontSize: '22px',
                  fontWeight: 600,
                  color: '#1E3F66',
                  marginBottom: '8px'
                }}>
                  Award-Winning
                </h3>
                <p style={{
                  fontSize: '15px',
                  color: '#1A2A3A'
                }}>
                  Recognized excellence
                </p>
              </div>
            </div>
            {/* Gallery Item 5 */}
            <div className="slide-up delay-3 hover-lift" style={{
              position: 'relative',
              borderRadius: '16px',
              overflow: 'hidden',
              backgroundColor: '#1E3F66',
              height: '280px',
              cursor: 'pointer'
            }}>
              <img src="/image.jpg" alt="Social Dining" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0, zIndex: 0 }} />
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(180deg, rgba(30, 63, 102, 0.7) 0%, rgba(26, 42, 58, 0.9) 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                padding: '32px',
                textAlign: 'center',
                zIndex: 1
              }}>
                <Users size={48} color="#4FA3D1" style={{ marginBottom: '16px' }} />
                <h3 style={{
                  fontFamily: '"Cinzel", serif',
                  fontSize: '22px',
                  fontWeight: 600,
                  color: '#E6E2DC',
                  marginBottom: '8px'
                }}>
                  Social Dining
                </h3>
                <p style={{
                  fontSize: '15px',
                  color: '#CFCAC2'
                }}>
                  Perfect for gatherings
                </p>
              </div>
            </div>
            {/* Gallery Item 6 - Wide */}
            <div className="slide-up delay-4 hover-lift" style={{
              gridColumn: 'span 2',
              position: 'relative',
              borderRadius: '16px',
              overflow: 'hidden',
              backgroundColor: '#2F8F9D',
              height: '280px',
              cursor: 'pointer'
            }}>
              <img src="/image2.jpg" alt="Live Greek Music" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0, zIndex: 0 }} />
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(90deg, rgba(47, 143, 157, 0.85) 0%, rgba(79, 163, 209, 0.7) 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                padding: '40px',
                textAlign: 'center',
                zIndex: 1
              }}>
                <Music size={56} color="#FFFFFF" style={{ marginBottom: '20px' }} />
                <h3 style={{
                  fontFamily: '"Cinzel", serif',
                  fontSize: '26px',
                  fontWeight: 600,
                  color: '#FFFFFF',
                  marginBottom: '12px'
                }}>
                  Live Greek Music
                </h3>
                <p style={{
                  fontSize: '16px',
                  color: '#E6E2DC'
                }}>
                  Select evenings feature traditional performances
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{
        padding: '96px 24px',
        background: 'linear-gradient(180deg, #1A2A3A 0%, #1E3F66 100%)'
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '48px'
          }}>
            <div className="slide-up">
              <h2 style={{
                fontFamily: '"Cinzel", serif',
                fontSize: 'clamp(32px, 5vw, 42px)',
                fontWeight: 600,
                color: '#E6E2DC',
                marginBottom: '24px'
              }}>
                Visit Us Tonight
              </h2>
              <p style={{
                fontSize: '17px',
                lineHeight: 1.7,
                color: '#CFCAC2',
                marginBottom: '32px'
              }}>
                Reservations recommended, especially on weekends. Walk-ins always welcome based on availability.
              </p>

              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '24px'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '16px'
                }}>
                  <MapPin size={24} color="#4FA3D1" style={{ flexShrink: 0, marginTop: '4px' }} />
                  <div>
                    <div style={{ fontWeight: 600, color: '#E6E2DC', marginBottom: '4px' }}>Location</div>
                    <div style={{ color: '#CFCAC2', fontSize: '15px' }}>
                      123 Main Street<br/>
                      Kimberley, Northern Cape<br/>
                      South Africa
                    </div>
                  </div>
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '16px'
                }}>
                  <Phone size={24} color="#4FA3D1" style={{ flexShrink: 0, marginTop: '4px' }} />
                  <div>
                    <div style={{ fontWeight: 600, color: '#E6E2DC', marginBottom: '4px' }}>Phone</div>
                    <a href="tel:+27123456789" style={{
                      color: '#2F8F9D',
                      textDecoration: 'none',
                      fontSize: '15px'
                    }}>
                      +27 12 345 6789
                    </a>
                  </div>
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '16px'
                }}>
                  <Clock size={24} color="#4FA3D1" style={{ flexShrink: 0, marginTop: '4px' }} />
                  <div>
                    <div style={{ fontWeight: 600, color: '#E6E2DC', marginBottom: '8px' }}>Opening Hours</div>
                    <div style={{ color: '#CFCAC2', fontSize: '15px', lineHeight: 1.6 }}>
                      Monday - Thursday: 5:00 PM - 10:00 PM<br/>
                      Friday - Saturday: 5:00 PM - 11:00 PM<br/>
                      Sunday: 12:00 PM - 9:00 PM
                    </div>
                  </div>
                </div>
              </div>

              <div style={{
                marginTop: '32px',
                display: 'flex',
                gap: '16px'
              }}>
                <a href="#" style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(47, 143, 157, 0.2)',
                  border: '1px solid rgba(47, 143, 157, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease'
                }}
                   onMouseEnter={(e) => {
                     e.currentTarget.style.backgroundColor = '#2F8F9D';
                     e.currentTarget.style.transform = 'translateY(-4px)';
                   }}
                   onMouseLeave={(e) => {
                     e.currentTarget.style.backgroundColor = 'rgba(47, 143, 157, 0.2)';
                     e.currentTarget.style.transform = 'translateY(0)';
                   }}>
                  <Facebook size={20} color="#E6E2DC" />
                </a>
                <a href="#" style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(47, 143, 157, 0.2)',
                  border: '1px solid rgba(47, 143, 157, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease'
                }}
                   onMouseEnter={(e) => {
                     e.currentTarget.style.backgroundColor = '#2F8F9D';
                     e.currentTarget.style.transform = 'translateY(-4px)';
                   }}
                   onMouseLeave={(e) => {
                     e.currentTarget.style.backgroundColor = 'rgba(47, 143, 157, 0.2)';
                     e.currentTarget.style.transform = 'translateY(0)';
                   }}>
                  <Instagram size={20} color="#E6E2DC" />
                </a>
              </div>
            </div>

            <div className="slide-up delay-2" style={{
              backgroundColor: '#E6E2DC',
              borderRadius: '16px',
              overflow: 'hidden',
              height: '400px'
            }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.123456789!2d24.7622!3d-28.7397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDQ0JzIzLjAiUyAyNMKwNDUnNDQuMCJF!5e0!3m2!1sen!2sza!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section style={{
        padding: '80px 24px',
        background: 'linear-gradient(135deg, #2F8F9D 0%, #1E3F66 100%)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 30% 50%, rgba(79, 163, 209, 0.2) 0%, transparent 50%)'
        }}></div>
        
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1
        }}>
          <h2 className="slide-up" style={{
            fontFamily: '"Cinzel", serif',
            fontSize: 'clamp(32px, 5vw, 42px)',
            fontWeight: 600,
            color: '#FFFFFF',
            marginBottom: '16px'
          }}>
            Ready for an Unforgettable Evening?
          </h2>
          <p className="slide-up delay-1" style={{
            fontSize: '18px',
            color: '#E6E2DC',
            marginBottom: '32px',
            lineHeight: 1.6
          }}>
            Reserve your table today and experience the warmth of Greek hospitality
          </p>
          <a href="tel:+27123456789" className="slide-up delay-2" style={{
            backgroundColor: '#FFFFFF',
            color: '#1E3F66',
            padding: '18px 48px',
            borderRadius: '999px',
            textDecoration: 'none',
            fontSize: '18px',
            fontWeight: 700,
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            display: 'inline-block',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)'
          }}
             onMouseEnter={(e) => {
               e.target.style.transform = 'scale(1.05) translateY(-2px)';
               e.target.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.3)';
             }}
             onMouseLeave={(e) => {
               e.target.style.transform = 'scale(1) translateY(0)';
               e.target.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
             }}>
            Call to Reserve — No Credit Card Required
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="greek-pattern" style={{
        backgroundColor: '#1E3F66',
        padding: '48px 24px 24px',
        borderTop: '1px solid rgba(79, 163, 209, 0.2)'
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '40px',
            marginBottom: '40px'
          }}>
            <div>
              <div style={{
                fontFamily: '"Cinzel", serif',
                fontSize: '24px',
                fontWeight: 700,
                color: '#4FA3D1',
                marginBottom: '16px',
                letterSpacing: '0.05em'
              }}>
                THE FAT GREEK
              </div>
              <p style={{
                fontSize: '14px',
                color: '#CFCAC2',
                lineHeight: 1.6
              }}>
                Authentic Greek cuisine in the heart of Kimberley. Where tradition meets contemporary dining.
              </p>
            </div>

            <div>
              <h3 style={{
                fontFamily: '"Cinzel", serif',
                fontSize: '16px',
                fontWeight: 600,
                color: '#E6E2DC',
                marginBottom: '16px'
              }}>
                Quick Links
              </h3>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px'
              }}>
                <a href="#about" style={{ color: '#CFCAC2', textDecoration: 'none', fontSize: '14px' }}>About</a>
                <a href="#menu" style={{ color: '#CFCAC2', textDecoration: 'none', fontSize: '14px' }}>Menu</a>
                <a href="#gallery" style={{ color: '#CFCAC2', textDecoration: 'none', fontSize: '14px' }}>Gallery</a>
                <a href="#contact" style={{ color: '#CFCAC2', textDecoration: 'none', fontSize: '14px' }}>Contact</a>
              </div>
            </div>

            <div>
              <h3 style={{
                fontFamily: '"Cinzel", serif',
                fontSize: '16px',
                fontWeight: 600,
                color: '#E6E2DC',
                marginBottom: '16px'
              }}>
                Hours
              </h3>
              <div style={{ fontSize: '14px', color: '#CFCAC2', lineHeight: 1.8 }}>
                Mon-Thu: 5PM - 10PM<br/>
                Fri-Sat: 5PM - 11PM<br/>
                Sunday: 12PM - 9PM
              </div>
            </div>

            <div>
              <h3 style={{
                fontFamily: '"Cinzel", serif',
                fontSize: '16px',
                fontWeight: 600,
                color: '#E6E2DC',
                marginBottom: '16px'
              }}>
                Legal
              </h3>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px'
              }}>
                <a href="#" style={{ color: '#CFCAC2', textDecoration: 'none', fontSize: '14px' }}>Privacy Policy</a>
                <a href="#" style={{ color: '#CFCAC2', textDecoration: 'none', fontSize: '14px' }}>Terms of Service</a>
              </div>
            </div>
          </div>

          <div style={{
            paddingTop: '24px',
            borderTop: '1px solid rgba(79, 163, 209, 0.2)',
            textAlign: 'center',
            fontSize: '14px',
            color: '#CFCAC2'
          }}>
            © 2026 The Fat Greek. All rights reserved. Crafted with passion in Kimberley, South Africa.
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a href="https://wa.me/27123456789" style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        width: '60px',
        height: '60px',
        backgroundColor: '#25D366',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 12px rgba(37, 211, 102, 0.4)',
        zIndex: 999,
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
      }}
         onMouseEnter={(e) => {
           e.currentTarget.style.transform = 'scale(1.1)';
           e.currentTarget.style.boxShadow = '0 6px 20px rgba(37, 211, 102, 0.5)';
         }}
         onMouseLeave={(e) => {
           e.currentTarget.style.transform = 'scale(1)';
           e.currentTarget.style.boxShadow = '0 4px 12px rgba(37, 211, 102, 0.4)';
         }}>
        <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>

      <style>{`
        @media (max-width: 768px) {
          .desktop-menu {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
          .mobile-menu {
            display: block !important;
          }
        }
      `}</style>
    </div>
  );
}
