const AboutUs = () => {
  document.title = "About Us | Happy Pill Bar & Resto";

  return (
    <div className="min-h-screen flex flex-col px-10 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
      {/* Page Title */}
      <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold mb-10 sm:mb-12 lg:mb-16 text-[var(--text-primary)]">
        ABOUT US
      </h1>

      {/* Main Content */}
      <div className="space-y-12 sm:space-y-16 lg:space-y-20 max-w-3xl mx-auto">
        {/* Intro Section */}
        <div className="text-center">
          {/* Placeholder image - add your actual src when ready */}
          <img
            src="gallery/christmas_new_year/7.jpg"
            alt="Happy Pill Welcome"
            className="w-full max-w-md mx-auto rounded-lg shadow-lg mb-6"
          />
          <p className="caption italic text-base sm:text-lg text-[var(--text-secondary)]">
            Your Daily Dose of Happiness in Iloilo City – Est. 2024
          </p>
        </div>

        {/* OUR STORY */}
        <section className="space-y-6">
          <h3 className="text-2xl sm:text-3xl font-bold text-center sm:text-left text-[var(--text-primary)]">
            Our Story
          </h3>
          <img
            src="gallery/venue/7.jpg"
            alt="Our Story Venue"
            className="w-full max-h-[500px] object-cover rounded-lg shadow-md mx-auto"
          />
          <p className="caption text-sm sm:text-base leading-relaxed text-[var(--text-secondary)]">
            Happy-Pill Bar & Resto was created from a simple but powerful belief: everyone deserves a place where stress fades, smiles return, and life feels lighter—even just for a moment. In a world full of pressure, responsibilities, and sacrifices, we wanted to build something that feels like a “happy pill”—a space that lifts the spirit, comforts the heart, and reminds people that joy is still within reach.
            <br /><br />
            The name Happy-Pill is not just a brand. It is a story of hope, resilience, and dreams that refused to die.
            <br /><br />
            One of the hearts behind Happy-Pill is Wilan Rodriguez, an OFW and my business partner. Like many modern-day heroes, Wilan left his family to work abroad—not for luxury, but for love. In Dubai, he worked as a barista, and at times took on other kinds of jobs, whatever was available, just to make sure he could send money home for his family. Every peso he earned carried sacrifice. Every day meant endurance. Every night came with homesickness.
            <br /><br />
            After long working hours, Wilan would walk from work back to his apartment—tired, missing home, yet still holding on. Along that daily walk, he would always pass by a place called Happiness Street. It may sound simple, but for him, that street meant everything. Seeing the name alone lifted his spirit. It reminded him to think positively, to keep going, and to believe that better days were ahead. Happiness Street became his silent companion, his reminder that joy is a choice even in the hardest seasons.
            <br /><br />
            While walking that street, Wilan carried a dream close to his heart: to one day have his own café business. A place where people could feel warmth, comfort, and happiness—just like what he felt every time he passed Happiness Street. A place where tired souls could rest, laugh, eat good food, and feel at home.
            <br /><br />
            Happy-Pill Bar & Resto was born from that dream.
            <br /><br />
            This brand represents every OFW, every worker, every dreamer who sacrifices today for a better tomorrow. It stands for positivity, gratitude, and giving back. Here, food is more than food. Drinks are more than drinks. Laughter is encouraged. Music heals. Conversations matter. And every guest is welcome, not just as a customer, but as family.
            <br /><br />
            Happy-Pill is our way of sharing the happiness we once searched for. It is proof that sacrifices are never wasted, that dreams planted in hardship can grow into something beautiful, and that joy—when shared—multiplies.
            <br /><br />
            Welcome to Happy-Pill Bar & Resto.
            <br />
            Your daily dose of happiness.
          </p>
        </section>

        {/* THE VENUE */}
        <section className="space-y-6">
          <h3 className="text-2xl sm:text-3xl font-bold text-center sm:text-left text-[var(--text-primary)]">
            The Venue
          </h3>
          <img
            src="gallery/venue/2.jpg"
            alt="The Venue"
            className="w-full max-h-[500px] object-cover rounded-lg shadow-md mx-auto"
          />
          <p className="caption text-sm sm:text-base leading-relaxed text-[var(--text-secondary)]">
            At Happy-Pill Bar & Resto, we have carefully designed our venue to be more than just a place to eat and drink. It is a sanctuary where every detail has been thoughtfully curated to create an atmosphere of warmth, comfort, and joy.
            <br /><br />
            From the moment you step inside, you are greeted by a vibrant yet cozy ambiance that invites you to relax and unwind. Our interior blends modern aesthetics with rustic charm, featuring comfortable seating, ambient lighting, and tasteful décor that reflects our commitment to creating a happy and welcoming space.
            <br /><br />
            Whether you are here for a casual meal, a night out with friends, or a special celebration, our venue is designed to accommodate your needs. We have spacious areas for socializing, intimate corners for quiet conversations, and a lively stage area for live music and events.
            <br /><br />
            Our friendly staff is dedicated to making your experience memorable, ensuring that you feel valued and cared for from the moment you arrive until your last sip of drink. At Happy-Pill Bar & Resto, we believe that a great venue is not just about the physical space but also about the people and the experiences that fill it.
          </p>
        </section>

        {/* OUR TEAM */}
        <section className="space-y-6">
          <h3 className="text-2xl sm:text-3xl font-bold text-center sm:text-left text-[var(--text-primary)]">
            Our Team
          </h3>
          <img
            src="gallery/christmas_new_year/5.jpg"
            alt="Our Team"
            className="w-full max-h-[500px] object-cover rounded-lg shadow-md mx-auto"
          />
          <p className="caption text-sm sm:text-base leading-relaxed text-[var(--text-secondary)]">
            Behind Happy-Pill Bar & Resto is a passionate team of individuals who share a common vision: to create a place where happiness is served daily. Our team is made up of dedicated professionals who bring their unique skills, creativity, and enthusiasm to every aspect of our business.
            <br /><br />
            From our talented cooks who craft delicious and innovative dishes to our skilled bartenders who mix up refreshing and exciting cocktails, every member of our team is committed to excellence. Our waitstaff are friendly and attentive, ensuring that every guest feels welcome and well taken care of.
            <br /><br />
            We believe that a great team is the heart of any successful business, and at Happy-Pill Bar & Resto, we are proud of the camaraderie, dedication, and passion that our team brings to work every day. Together, we strive to create memorable experiences for our guests and to make Happy-Pill a place where everyone can find their daily dose of happiness.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;