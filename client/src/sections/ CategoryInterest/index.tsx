import { CategoryCard } from "@/sections/CategoryInterest/components/CategoryCard";

export const CategoryInterest = () => {
  return (
    <div className="items-center box-border caret-transparent flex flex-col justify-center pb-10 px-4">
      <h1 className="text-3xl font-semibold box-border caret-transparent leading-9 text-center mb-4">
        Which categories interest you?
      </h1>
      <p className="box-border caret-transparent text-center mb-4">
        Discover projects just for you and get great recommendations when you
        select your interests.
      </p>
      <p className="box-border caret-transparent text-center mb-5">
        Explore our top categories
      </p>
      <div className="box-border caret-transparent max-w-none w-full mx-auto md:max-w-screen-xl">
        <div className="box-border caret-transparent flex flex-wrap justify-center">
          <CategoryCard
            imageUrl="https://c.animaapp.com/mh4w5bh5ddZvQu/assets/Education.cadfcdcc.png"
            imageAlt="Education"
            title="Education"
            description="Projects focused on learning and education."
          />
          <CategoryCard
            imageUrl="https://c.animaapp.com/mh4w5bh5ddZvQu/assets/fitness.79a27bde.png"
            imageAlt="Health and Fitness"
            title="Health and Fitness"
            description="Projects focused on improving health and fitness."
          />
          <CategoryCard
            imageUrl="https://c.animaapp.com/mh4w5bh5ddZvQu/assets/sport.30b90e80.png"
            imageAlt="Sport"
            title="Sport"
            description="Projects focused on innovative sports technology."
          />
          <CategoryCard
            imageUrl="https://c.animaapp.com/mh4w5bh5ddZvQu/assets/film.16889fea.png"
            imageAlt="Social Impact"
            title="Social Impact"
            description="Projects with a positive social impact"
          />
          <CategoryCard
            imageUrl="https://c.animaapp.com/mh4w5bh5ddZvQu/assets/audio.a19d715c.png"
            imageAlt="Arts and Culture"
            title="Arts and Culture"
            description="Creative and artistic projects."
          />
          <CategoryCard
            imageUrl="https://c.animaapp.com/mh4w5bh5ddZvQu/assets/bag.be085395.png"
            imageAlt="Travel and Outdoors"
            title="Travel and Outdoors"
            description="Projects related to travel and outdoor activities."
          />
          <CategoryCard
            imageUrl="https://c.animaapp.com/mh4w5bh5ddZvQu/assets/creative.b0355ed2.png"
            imageAlt="Creative Services"
            title="Creative Services"
            description="Projects offering innovative and artistic services."
          />
          <CategoryCard
            imageUrl="https://c.animaapp.com/mh4w5bh5ddZvQu/assets/fulfillment.119c3aa8.png"
            imageAlt="Fulfillment"
            title="Fulfillment"
            description="Projects dedicated to providing essential services,"
          />
          <CategoryCard
            imageUrl="https://c.animaapp.com/mh4w5bh5ddZvQu/assets/prototype.3764306f.png"
            imageAlt="Prototyping and Production"
            title="Prototyping and Production"
            description="Projects focused on prototypes and final products."
          />
        </div>
      </div>
    </div>
  );
};
