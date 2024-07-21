import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useIntersectionObserver } from "@uidotdev/usehooks";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  const [heroRef, heroEntry] = useIntersectionObserver({
    threshold: 0.3,
    root: null,
    rootMargin: "0px",
  });
  const [searchRef, searchEntry] = useIntersectionObserver({
    threshold: 0,
    root: null,
    rootMargin: "16px",
  });
  const [featuresRef, featuresEntry] = useIntersectionObserver({
    threshold: 0,
    root: null,
    rootMargin: "24px",
  });
  const [faqRef, faqEntry] = useIntersectionObserver({
    threshold: 0,
    root: null,
    rootMargin: "16px",
  });
  const [reviewsRef, reviewsEntry] = useIntersectionObserver({
    threshold: 0,
    root: null,
    rootMargin: "16px",
  });
  const [ctaRef, ctaEntry] = useIntersectionObserver({
    threshold: 0,
    root: null,
    rootMargin: "16px",
  });

  return (
    <div className="container mx-auto px-4">
      <section
        ref={heroRef}
        className={`min-h-screen flex items-center justify-center text-center ${
          heroEntry?.isIntersecting ? "animate-fade-in" : "opacity-0"
        }`}
      >
        <div>
          <h1 className="text-6xl font-bold mb-4">Discover Local Gems</h1>
          <p className="text-2xl text-gray-600 mb-8">
            Your go-to platform for exploring and reviewing local businesses
          </p>
          <Button size="lg" asChild>
            <Link to="/auth/login">Get Started</Link>
          </Button>
        </div>
      </section>

      <section
        ref={searchRef}
        className={`py-16 ${
          searchEntry?.isIntersecting ? "animate-slide-up" : "opacity-0"
        }`}
      >
        <div className="flex justify-center mb-8">
          <Input
            className="w-1/2 mr-2"
            placeholder="Search for businesses..."
          />
          <Button>Search</Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="p-4">
              <h3 className="font-semibold mb-2">Featured Business {i}</h3>
              <p className="text-sm text-gray-600 mb-2">⭐️⭐️⭐️⭐️⭐️</p>
              <p className="text-sm">
                Discover why this local favorite is trending!
              </p>
            </Card>
          ))}
        </div>
      </section>

      <section
        ref={featuresRef}
        className={`py-16 ${
          featuresEntry?.isIntersecting ? "animate-slide-up" : "opacity-0"
        }`}
      >
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Authentic Reviews</h3>
            <p>Real experiences shared by our community members.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Discover Hidden Gems</h3>
            <p>Uncover local businesses you might have missed.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Support Local</h3>
            <p>Help your community thrive by supporting local businesses.</p>
          </div>
        </div>
      </section>

      <section
        ref={faqRef}
        className={`py-16 ${
          faqEntry?.isIntersecting ? "animate-fade-in" : "opacity-0"
        }`}
      >
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>How do I leave a review?</AccordionTrigger>
            <AccordionContent>
              To leave a review, you need to be logged in. Once logged in,
              navigate to the business page and click on the "Write a Review"
              button.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Can I edit my review?</AccordionTrigger>
            <AccordionContent>
              Yes, you can edit your review within 48 hours of posting. After
              that, the review becomes permanent.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>How are businesses ranked?</AccordionTrigger>
            <AccordionContent>
              Businesses are ranked based on a combination of factors including
              user ratings, review quality, and overall popularity.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <section
        ref={reviewsRef}
        className={`py-16 ${
          reviewsEntry?.isIntersecting ? "animate-slide-up" : "opacity-0"
        }`}
      >
        <h2 className="text-3xl font-semibold mb-8 text-center">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-6">
            <p className="mb-4">
              "This platform has helped me discover so many amazing local
              businesses. It's become my go-to for finding new places to eat and
              shop!"
            </p>
            <p className="font-semibold">- Sarah J.</p>
          </Card>
          <Card className="p-6">
            <p className="mb-4">
              "As a small business owner, this site has been invaluable. The
              reviews from customers have really helped my business grow."
            </p>
            <p className="font-semibold">- Mike T.</p>
          </Card>
        </div>
      </section>

      <section
        ref={ctaRef}
        className={`py-16 text-center ${
          ctaEntry?.isIntersecting ? "animate-fade-in" : "opacity-0"
        }`}
      >
        <h2 className="text-3xl font-semibold mb-4">Ready to Get Started?</h2>
        <p className="mb-8">
          Join our community today and start discovering and supporting local
          businesses.
        </p>
        <Button size="lg" asChild>
          <Link to="/auth/register">Sign Up Now</Link>
        </Button>
      </section>
    </div>
  );
};

export default HomePage;
