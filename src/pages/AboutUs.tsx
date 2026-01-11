import PageTransition from "../PageTransition";

const AboutUs = () => {
  document.title = "About Us | Happy Pill Bar & Resto";

  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col px-10 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        {/* Page Title */}
        <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold mb-10 sm:mb-12 lg:mb-16 text-[var(--text-primary)]">
          ABOUT US
        </h1>

        {/* Main Content */}
        <div className="space-y-12 sm:space-y-16 lg:space-y-20 max-w-3xl mx-auto">
          {/* Intro Section */}
          <div className="text-center">
              <img
                src="gallery/about-us.png"
                alt="Happy Pill Welcome"
                className="inset-0 w-full h-full rounded-lg mb-4"
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

            <div className="max-w-3xl mx-auto px-2 py-4 text-[var(--text-secondary)]">
              <p className="mb-8 caption text-sm sm:text-base leading-relaxed px-2 text-[var(--text-secondary)]">
                Happy-Pill Bar & Resto was created from a simple but powerful belief: everyone deserves a place where stress fades, smiles return, and life feels lighter—even just for a moment. In a world full of pressure, responsibilities, and sacrifices, we wanted to build something that feels like a “happy pill”—a space that lifts the spirit, comforts the heart, and reminds people that joy is still within reach.
              </p>

              <p className="text-base sm:text-lg leading-relaxed font-medium italic text-center my-10 px-6 border-l-4 border-[var(--accent)]/60 pl-6">
                <strong>The name Happy-Pill is not just a brand. It is a story of hope, resilience, friendship, and dreams that refused to die.</strong>
              </p>

              <img
                src="gallery/about-us-1.png"
                alt="Ronald and Wilan"
                className="w-full max-h-[500px] object-cover rounded-lg shadow-md mx-auto mb-8"
              />

              <p className="mb-8 caption text-sm sm:text-base leading-relaxed px-2 text-[var(--text-secondary)]">
                One of the hearts behind Happy-Pill is Wilan Rodriguez, an OFW and my business partner. Like many modern-day heroes, Wilan left his family to work abroad—not for luxury, but for love. In Dubai, he worked as a barista and took on whatever jobs were available, just to make sure he could send money home. Every peso he earned carried sacrifice. Every day meant endurance. Every night came with homesickness.
              </p>

              <p className="mb-8 caption text-sm sm:text-base leading-relaxed px-2 text-[var(--text-secondary)]">
                After long working hours, Wilan would walk from work back to his apartment—tired, missing home, yet still holding on. Along that daily walk, he would always pass by a place called Happiness Street. Simple as it sounded, that street meant everything to him. Seeing the name alone lifted his spirit. It reminded him to think positively, to keep going, and to believe that better days were ahead. Happiness Street became his silent companion—a reminder that joy is a choice, even in the hardest seasons.
              </p>

              <p className="mb-8 caption text-sm sm:text-base leading-relaxed px-2 text-[var(--text-secondary)]">
                During those walks, Wilan carried a dream close to his heart: to one day have his own café business. A place where people could feel warmth, comfort, and happiness—just like what he felt every time he passed Happiness Street. A place where tired souls could rest, laugh, enjoy good food, and feel at home.
              </p>

              <p className="text-base sm:text-lg font-bold italic text-center my-10">
                Then came the pandemic.
              </p>

              <p className="mb-8 caption text-sm sm:text-base leading-relaxed px-2 text-[var(--text-secondary)]">
                Wilan decided to return to the Philippines and chose to stay in Iloilo City to be with his family. He did not go back to Dubai. Around this time, his childhood buddy Ronald (Onat)—whom he had not seen for more than 20 years—reached out to him through Facebook Messenger. After several attempts, Wilan finally replied. When Ronald went home to Iloilo for vacation, they met again, shared breakfast, and tried to catch up on all the years they had lost.
              </p>

              <p className="text-base sm:text-lg font-bold italic text-center my-10">
                That simple reunion sparked something powerful.
              </p>

              <img
                src="gallery/about-us-2.png"
                alt="Happy Pill Launch"
                className="w-full max-h-[500px] object-cover rounded-lg shadow-md mx-auto mb-8"
              />

              <p className="mb-8 caption text-sm sm:text-base leading-relaxed px-2 text-[var(--text-secondary)]">
                That was when conversations about business began. The idea of putting up a café slowly took shape. Wilan mentioned at least three possible business names, but one name stood out above all others—Happy-Pill. It immediately felt right. It carried meaning. It carried his story.
              </p>

              <p className="mb-8 caption text-sm sm:text-base leading-relaxed px-2 text-[var(--text-secondary)]">
                What followed was one year and six months of hard work—planning, researching, meetings, preparations, and countless discussions. At first, the concept was purely a café. But as the vision grew, it evolved into what is now Happy-Pill Bar & Resto.
              </p>

              <p className="mb-8 caption text-sm sm:text-base leading-relaxed px-2 text-[var(--text-secondary)]">
                During the registration process, the name Happy Pill was initially unavailable with DTI. We registered under a different name—INZOMNIAX CAFE—and even received a DTI Certificate for it. But something didn’t feel complete. During the planning stage, we decided to try once more to apply for the name Happy-Pill Bar & Resto. This time, it was approved.
              </p>

              <p className="text-base sm:text-lg font-bold italic text-center my-10">
                That moment felt like destiny.
              </p>

              <img
                src="gallery/about-us-3.png"
                alt="Happy Pill with Lots of Customers"
                className="w-full max-h-[500px] object-cover rounded-lg shadow-md mx-auto mb-8"
              />

              <p className="mb-8 caption text-sm sm:text-base leading-relaxed px-2 text-[var(--text-secondary)]">
                We knew then that this was the name meant for us. That was when Happy-Pill Bar & Resto was officially born.
              </p>

              <p className="mb-8 caption text-sm sm:text-base leading-relaxed px-2 text-[var(--text-secondary)]">
                Today, Happy-Pill represents every OFW, every worker, every dreamer who sacrifices today for a better tomorrow. It stands for positivity, gratitude, friendship, and giving back. Here, food is more than food. Drinks are more than drinks. Laughter is encouraged. Music heals. Conversations matter. And every guest is welcome—not just as a customer, but as family.
              </p>

              <p className="mb-8 caption text-sm sm:text-base leading-relaxed px-2 text-[var(--text-secondary)]">
                Happy-Pill is our way of sharing the happiness we once searched for. It is proof that sacrifices are never wasted, that dreams planted in hardship can grow into something beautiful, and that joy—when shared—multiplies.
              </p>

              <p className="text-xl sm:text-2xl font-bold text-center mt-12 text-[var(--text-primary)]">
                Welcome to Happy-Pill Bar & Resto.<br />
                <span className="text-[var(--accent)]">Your daily dose of happiness.</span>
              </p>
            </div>
          </section>

          {/* THE VENUE */}
          <section className="space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-center sm:text-left text-[var(--text-primary)]">
              The Venue
            </h3>
            <img
              src="gallery/the-venue-1.png"
              alt="The Venue at Happy Pill"
              className="w-full max-h-[500px] object-cover rounded-lg shadow-md mx-auto mb-4"
            />
            <p className="caption text-sm sm:text-base leading-relaxed px-2 text-[var(--text-secondary)]">
              At Happy-Pill Bar & Resto, we have carefully designed our venue to be more than just a place to eat and drink. It is a sanctuary where every detail has been thoughtfully curated to create an atmosphere of warmth, comfort, and joy.
              <br /><br />
              From the moment you step inside, you are greeted by a vibrant yet cozy ambiance that invites you to relax and unwind. Our interior blends modern aesthetics with rustic charm, featuring comfortable seating, ambient lighting, and tasteful décor that reflects our commitment to creating a happy and welcoming space.
              <br /><br />
            <img
              src="gallery/the-venue-2.png"
              alt="The Venue at Happy Pill"
              className="w-full max-h-[500px] object-cover rounded-lg shadow-md mx-auto mb-4"
            />
              Whether you are here for a casual meal, a night out with friends, or a special celebration, our venue is designed to accommodate your needs. We have spacious areas for socializing, intimate corners for quiet conversations, and a lively stage area for live music and events.
              <br /><br />
            <img
              src="gallery/the-venue-3.png"
              alt="The Venue at Happy Pill"
              className="w-full max-h-[500px] object-cover rounded-lg shadow-md mx-auto mb-4"
            />
            </p>
          </section>

          {/* OUR TEAM */}
          <section className="space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-center sm:text-left text-[var(--text-primary)]">Our Team</h3>
            <img
              src="gallery/our-team-1.png"
              alt="Our Team"
              className="w-full max-h-[500px] object-cover rounded-lg shadow-md mx-auto"
            />
            <p className="caption text-sm sm:text-base leading-relaxed px-2 text-[var(--text-secondary)]">
              Behind Happy-Pill Bar & Resto is a passionate team of individuals who share a common vision: to create a place where happiness is served daily. Our team is made up of dedicated professionals who bring their unique skills, creativity, and enthusiasm to every aspect of our business.
              <br /><br />
              <img
                src="gallery/our-team-2.png"
                alt="Our Team"
                className="w-full max-h-[500px] object-cover rounded-lg shadow-md mx-auto mb-4"
              />
              From our talented cooks who craft delicious and innovative dishes to our skilled bartenders who mix up refreshing and exciting cocktails, every member of our team is committed to excellence. Our waitstaff are friendly and attentive, ensuring that every guest feels welcome and well taken care of.
              <br /><br />
              <img
                src="gallery/our-team-3.png"
                alt="Our Team"
                className="w-full max-h-[500px] object-cover rounded-lg shadow-md mx-auto mb-4"
              />
              We believe that a great team is the heart of any successful business, and at Happy-Pill Bar & Resto, we are proud of the camaraderie, dedication, and passion that our team brings to work every day. Together, we strive to create memorable experiences for our guests and to make Happy-Pill a place where everyone can find their daily dose of happiness.
            </p>
              <img
                src="gallery/our-team-4.png"
                alt="Our Team"
                className="w-full max-h-[500px] object-cover rounded-lg shadow-md mx-auto mb-4"
              />
              <p className="text-xl sm:text-2xl font-bold text-center mt-12 text-[var(--text-primary)]">
                Thank you for choosing Happy-Pill - Bar & Resto!<br />
                <span className="text-[var(--accent)] text-sm italic font-[600]">- The Happy Pill Staff</span>
              </p>
          </section>
        </div>
      </div>
    </PageTransition>
  );
};

export default AboutUs;