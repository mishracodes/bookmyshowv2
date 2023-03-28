import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#313035]'>
      {/* //showlisting */}
      <div className='hidden lg:block'>
        <div className='flex justify-between items-center h-20 px-4 text-white max-w-7xl mx-auto '>
          <div className='flex flex-grow'>
            <img alt="hut" src="https://in.bmscdn.com/webin/common/icons/hut.svg" className='w-9 h-9 mr-3' />
            <p><span className='font-semibold mr-2'>List your Show</span> Got a show, event, activity or a great experience? Partner with us &amp; get listed on BookMyShow
            </p>
          </div>
          <a href="/list-your-show" className="bg-[#ec5e71] px-4 py-2 rounded-md">Contact today!</a>

        </div>
        {/* helpandsupport */}
        <div className='bg-[#404043]'>
          <div className=' text-[#a5a5a5] h-28 flex justify-around items-center max-w-7xl mx-auto '>
            <div className='flex flex-col justify-center  items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 102 102" id="icon-callcenter" width="50px" height="50px" fill='#a5a5a5'><path d="M68.8 29.4c0-10.4-8.4-18.8-18.8-18.8S31.2 19 31.2 29.4 39.6 48.2 50 48.2s18.8-8.4 18.8-18.8zm-35.8 0c0-9.3 7.6-17 17-17 9.3 0 17 7.6 17 17 0 9.3-7.6 17-17 17-9.3 0-17-7.6-17-17z"></path><path d="M24 30.3c.5 0 .9-.4.9-.9C24.9 15.6 36.2 4.3 50 4.3s25.1 11.3 25.1 25.1c0 13.1-10.5 28.3-24.2 29v-3.9c0-.5-.4-.9-.9-.9s-.9.4-.9.9v8.6c0 .5.4.9.9.9s.9-.4.9-.9v-2.9c14.7-.7 26-16.8 26-30.8C76.9 14.6 64.8 2.5 50 2.5S23.1 14.6 23.1 29.4c0 .5.4.9.9.9z"></path><path d="M68.1 63c-.6-.2-1.2-.3-1.9-.3-.9 0-2.3.7-4.9 2.1-3.2 1.7-7.7 4-10.6 4-3.2 0-8-2.3-11.5-4-2.8-1.3-4.3-2-5.3-2-.7 0-1.3.1-1.9.3C16.7 68.2 11.2 86 11.2 96.7c0 .5.4.9.9.9H88c.5 0 .9-.4.9-.9 0-10.8-5.6-28.6-20.8-33.7zM13 95.7c.3-12.1 7.2-26.8 19.6-30.9.4-.1.8-.2 1.3-.2.6 0 2.7 1 4.5 1.9 3.9 1.9 8.7 4.2 12.3 4.2 3.3 0 7.8-2.3 11.4-4.2 1.6-.8 3.6-1.9 4.1-1.9s.9.1 1.3.2C79.9 68.9 86.7 83.6 87 95.7H13zm3.6-55.3c.5 0 .9-.4.9-.9V26.3c0-.5-.4-.9-.9-.9s-.9.4-.9.9v13.2c0 .5.4.9.9.9zm66.8 0c.5 0 .9-.4.9-.9V26.3c0-.5-.4-.9-.9-.9s-.9.4-.9.9v13.2c-.1.5.4.9.9.9z"></path></svg>
              <p className='text-[11px] mt-2'>24/7 CUSTOMER CARE</p>
            </div>
            <div className='flex flex-col justify-center  items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 102 102" id="icon-resend" width="50px" height="50px" fill='#a5a5a5'><path d="M92.1 69l-5.6-13.9a1 1 0 0 0-1.1-.5c-1.9.8-4.1-.2-4.8-2.1-.4-.9-.4-1.9 0-2.8.4-.9 1.1-1.6 2-2 .2-.1.4-.2.5-.4s.1-.4 0-.6l-5.6-13.9a1 1 0 0 0-1.1-.5L61 38.5l9-20.9c.2-.4 0-.9-.4-1.1L57 11.1c-.4-.2-.9 0-1.1.4a3.3 3.3 0 0 1-4.3 1.8c-.8-.3-1.4-1-1.8-1.8-.3-.8-.3-1.7 0-2.5.1-.2.1-.4 0-.6-.1-.2-.2-.4-.4-.5L36.8 2.6c-.4-.2-.9 0-1.1.4L12.3 58.2l-3.9 1.5c-.2.2-.4.3-.4.5-.1.2-.1.4 0 .6l5.6 13.9c.2.4.7.6 1.1.5 1.9-.7 4.1.2 4.8 2 .4.9.4 1.9 0 2.8s-1.1 1.6-2 2c-.2.1-.4.2-.5.4-.1.2-.1.4 0 .6l5.4 14c.1.2.2.4.4.5.1 0 .2.1.3.1.1 0 .2 0 .3-.1l68.1-27.3c.5-.2.7-.7.6-1.2zM36.9 4.4L48 9.1c-.2 1-.2 2 .2 3 .5 1.2 1.4 2.2 2.7 2.7 2.3 1 4.8.1 6.1-1.9l11.1 4.7-9.3 21.8-4.7 1.9L59 30.2l2.5-5.8c.1-.2.1-.4 0-.6s-.2-.4-.4-.5L38 13.5c-.2-.1-.4-.1-.6 0-.2.1-.4.2-.5.4L19.1 55.5l-4.7 1.9 22.5-53zm-1.4 16.7l.8.3c.1 0 .2.1.3.1.3 0 .6-.2.8-.5.2-.4 0-.9-.4-1.1l-.8-.3 1.8-4.3 21.6 9.2-1.8 4.3-.8-.4c-.4-.2-.9 0-1.1.4-.2.4 0 .9.4 1.1l.8.3-5.1 12-30.7 12.4 14.2-33.5zM23.7 95.6l-5-12.4c1-.6 1.7-1.4 2.2-2.5.6-1.3.6-2.8 0-4.1-.8-2-2.8-3.4-5-3.4-.4 0-.8 0-1.2.1L9.8 61l66.5-26.7 5 12.4c-1 .6-1.7 1.4-2.2 2.5a4.9 4.9 0 0 0 0 4.1c.8 2 2.8 3.4 5 3.4.4 0 .8 0 1.2-.1l5 12.4-66.6 26.6z"></path><path d="M70 42.1c-.1-.2-.2-.4-.4-.5-.2-.1-.4-.1-.6 0L20.2 61.2a1 1 0 0 0-.5 1.1L30 87.8c.1.2.2.4.4.5.1 0 .2.1.3.1.1 0 .2 0 .3-.1l42.3-17 6.4-2.6c.4-.2.6-.7.5-1.1L70 42.1zm3.5 27.3l-.3-.8a1 1 0 0 0-1.1-.5 1 1 0 0 0-.5 1.1l.4.8-34.2 13.7-.3-.7a1 1 0 0 0-1.1-.5 1 1 0 0 0-.5 1.1l.3.8-5.1 2-9.6-23.9 5.1-2 .3.8c.1.3.4.5.8.5.1 0 .2 0 .3-.1.4-.2.6-.7.5-1.1l-.3-.8 34.1-13.7.3.8c.1.3.4.5.8.5.1 0 .2 0 .3-.1.4-.2.6-.7.5-1.1l-.3-.8 4.9-2 9.6 23.9-4.9 2.1z"></path><path d="M30.6 65.7c-.2-.4-.7-.6-1.1-.5s-.6.7-.5 1.1l1.4 3.4c.1.3.4.5.8.5.1 0 .2 0 .3-.1.4-.2.6-.7.5-1.1l-1.4-3.3zm3.5 8.6a1 1 0 0 0-1.1-.5 1 1 0 0 0-.5 1.1l1.4 3.4c.1.3.4.5.8.5.1 0 .2 0 .3-.1.4-.2.6-.7.5-1.1l-1.4-3.3zm32.2-22.9a1 1 0 0 0-1.1-.5 1 1 0 0 0-.5 1.1l1.4 3.4c.1.3.4.5.8.5.1 0 .2 0 .3-.1.4-.2.6-.7.5-1.1l-1.4-3.3zm1.9 9.3l1.4 3.4c.1.3.4.5.8.5.1 0 .2 0 .3-.1.4-.2.6-.7.5-1.1L69.7 60a1 1 0 0 0-1.1-.5c-.4.2-.6.7-.4 1.2zm-19.5-34l3.1 1.3c.1 0 .2.1.3.1.3 0 .6-.2.8-.5.2-.4 0-.9-.4-1.1l-3.1-1.3c-.4-.2-.9 0-1.1.4-.3.4-.1.9.4 1.1zm-7.8-3.3l3.1 1.3c.1 0 .2.1.3.1.3 0 .6-.2.8-.5.2-.4 0-.9-.4-1.1l-3.1-1.3c-.4-.2-.9 0-1.1.4-.2.4 0 .9.4 1.1zm13.4 41.4c-.5 0-.8.4-.8.8 0 2.4-2 4.4-4.4 4.4s-4.4-2-4.4-4.4c0-2.3 1.9-4.2 4.2-4.3l-1.6 2.3c-.3.4-.2.9.2 1.2.1.1.3.1.5.1.3 0 .5-.1.7-.4l2.6-3.7c.3-.4.2-.9-.2-1.1L47.5 57c-.4-.3-.9-.2-1.2.2s-.2.9.2 1.2l1.9 1.4c-3 .3-5.4 2.9-5.4 5.9 0 3.3 2.7 6 6 6s6-2.7 6-6c.1-.5-.3-.9-.7-.9z"></path></svg>
              <p className='text-[11px] mt-2'>RESEND BOOKING CONFIRMATION</p>
            </div>

            <div className='flex flex-col justify-center items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" id="icon-newsletter" viewBox="-1 -1 102 102" width="50px" height="50px" fill='#a5a5a5'><g id="elnewsletter"><path className="elst0" d="M97.5 90.3V33.6c0-.5-.4-1-1-1H82.9V9.8c0-.5-.4-1-1-1H18.1a1 1 0 0 0-1 1v22.8H3.5a1 1 0 0 0-1 1v56.9c0 .1.1.1.1.2v.1c0 .1.1.1.2.1.1.1.2.1.2.1.1 0 .1 0 .2.1h93.4c.1 0 .3 0 .4-.1 0 0 .1 0 .1-.1.1-.1.2-.1.2-.2v-.1c0-.1.1-.1.1-.2.1 0 .1 0 .1-.1zm-1.9-55.7v53.6L63.9 64.1l18.6-17.7 7.7-7.4c.3-.3.4-.7.2-1.1-.1-.4-.5-.6-.9-.6h-6.8v-2.7h12.9zM50.2 56.1l43.4 33.1H6.4l43.8-33.1zm32.7-16.8h4.4l-4.4 4.1v-4.1zM19.1 10.8h61.8v34.5L62.4 62.9l-11.6-8.8c-.3-.3-.8-.3-1.2 0L37.8 63 19.1 45.3V10.8zm-2 32.6l-4.4-4.1h4.4v4.1zm0-8.8v2.7h-6.8c-.4 0-.8.2-.9.6-.1.4-.1.8.2 1.1l26.5 25.2-31.8 24V34.6h12.8z"></path><path className="elst0" d="M28.9 22.5h42.7a1 1 0 0 0 0-2H28.9c-.5 0-1 .4-1 1s.4 1 1 1zm0 10h42.7a1 1 0 0 0 0-2H28.9a1 1 0 0 0 0 2zm0 9.9h42.7a1 1 0 0 0 0-2H28.9c-.5 0-1 .4-1 1s.4 1 1 1z"></path></g></svg>
              <p className='text-[11px] mt-2'>SUBSCRIBE TO THE NEWSLETTER</p>

            </div>
          </div>
        </div>
        {/* sitemap */}
        {/* logo and links */}
        <div className='bg-[#333338]  '>
          <div className='text-[#a5a5a5] px-4  max-w-7xl mx-auto'>

            <p className='text-xs mt-6 mb-5'>MOVIES NOW SHOWING IN BENGALURU</p>
            <p className='text-[11px] text-[#7f7f7f]'>Kabzaa | John Wick: Chapter 4 | Bholaa | Gurudev Hoysala | Dasara | Das Ka Dhamki | Tu Jhoothi Main Makkaar | Mrs. Chatterjee Vs Norway | Fast X | Shazam! Fury of the Gods</p>

            <p className='text-xs mt-6 mb-5'>UPCOMING MOVIES IN BENGALURU</p>
            <p className='text-[11px] text-[#7f7f7f]'>Yaaran Diyan Poun Baaran | Parari | Karna Pisachi | Laika | Kallanum Bhagavathiyum | Mariguddada Gaddadharigalu | Borrder | Agent Narasimha-117 | The Era Of 1990 | Aazam | T (Odia) | Sathyam Vadha Dharmam Chera | Yosi | Higuita | Watan Maru Kathiyawad | Section 84 | Dungeons and Dragons: Honor Among Thieves | Jawanum Mullappoovum | Thuruth | Section 306 IPC</p>

            <p className='text-xs mt-6 mb-5'>MOVIES BY GENRE</p>
            <p className='text-[11px] text-[#7f7f7f]'>Drama Movies | Action Movies | Thriller Movies | Adventure Movies | Crime Movies | Comedy Movies | Romantic Movies | Sci-Fi Movies | Fantasy Movies | Horror Movies | Classic Movies | Adaptation Movies | Biography Movies | Adult Movies | Devotional Movies | Mythological Movies | Noir Movies | Period Movies | Political Movies | Supernatural Movies | Sports Movies | Heist Movies | screening Movies | Suspense Movies | Historical Movies | Tragedy Movies | Animation Movies | Anime Movies | Psychological Movies | War Movies | Mystery Movies | Musical Movies | Bollywood Movies</p>

            <p className='text-xs mt-6 mb-5'>MOVIES BY LANGUAGE</p>
            <p className='text-[11px] text-[#7f7f7f]'>Movies in English | Movies in Hindi | Movies in Kannada | Movies in Telugu | Movies in Tamil | Movies in Malayalam | Movies in Japanese | Movies in Chattisgarhi | Movies in Khasi | Movies in Sindhi | Movies in English 7D | Movies in Urdu | Movies in Punjabi | Movies in Nepali | Movies in Portuguese | Movies in French | Movies in Bhojpuri | Movies in Tulu | Movies in Gujarati | Movies in Rajasthani | Movies in Haryanavi | Movies in Assamese | Movies in Marathi | Movies in Bengali | Movies in Odia | Movies in Konkani</p>

            <p className='text-xs mt-6 mb-5'>PLAYS BY GENRE IN BENGALURU</p>
            <p className='text-[11px] text-[#7f7f7f]'>Drama Plays | Comedy Plays | Action Plays | Classic Plays | Contemporary Plays | Adventure Plays | Adaptation Plays | Biography Plays | Adult Plays | Mythological Plays | Noir Plays | Online Streaming Plays Plays | Period Plays | Political Plays | Tribute Plays | Fantasy Plays | Sci-Fi Plays | Regional Plays | Broadway Plays | Suspense Plays | Historical Plays | Thriller Plays | Tragedy Plays | Horror Plays | Psychological Plays | War Plays | Mystery Plays | Romantic Plays | Musical Plays</p>

            <p className='text-xs mt-6 mb-5'>MOVIE REVIEWS AND TRENDING ARTICLES</p>
            <p className='text-[11px] text-[#7f7f7f]'>Trending Articles | Latest News on Movies, Events, Plays and Sports | Movie Celebrities</p>

            <p className='text-xs mt-6 mb-5'>MOVIE UPDATES AND CELEBRITIES</p>
            <p className='text-[11px] text-[#7f7f7f]'>Upcoming Movies | Movies Now Showing | Movie Celebrities</p>

            <p className='text-xs mt-6 mb-5'>THINGS TO DO IN BENGALURU</p>
            <p className='text-[11px] text-[#7f7f7f]'>Adventure | Amusement Parks | Festivals | Durga Puja Festival | Food and Drinks | Holi Parties | Antiques, Heritage, Museums | Christmas Celebrations | Hilsa Festival | Gaming | Hospitals | Poila Baishakh Festival | Parties | Unique Tours | Navratri | Quizzes and Competitions | Shops and Malls | Tourist Attractions | Monuments | Nightlife | Valentine's Day Celebrations</p>

            <p className='text-xs mt-6 mb-5'>SPORTS EVENTS IN BENGALURU</p>
            <p className='text-[11px] text-[#7f7f7f]'>Cricket | Online Games | E Sports | Chess | Running | Athletics | Archery | Baseball | Badminton | Cycling | Golf | Kickboxing | Boat Race | Boxing | Card Games | Derby Horse Race | Football | Kabaddi | Mixed Martial Arts | Online Sports | Muay Thai | Swimming | Pool | Rugby | Hockey | Ice Skating | Judo | Triathlon | Motorsports | Walking | Shooting | Tennis | Wrestling | Sailing | Snooker | Basketball | Bowling | Polo | Volleyball | Table Tennis | Weight Lifting</p>

            <p className='text-xs mt-6 mb-5'>EVENTS IN BENGALURU</p>
            <p className='text-[11px] text-[#7f7f7f]'>Comedy Shows | Workshops | Music Shows | Meetups | Kids | Spirituality | Screening | Talks | Beer Festival | Conferences | Exhibitions | Celebrity Wishes | Award shows | Online Streaming Events | Vaccination | New Year Parties</p>

            <p className='text-xs mt-6 mb-5'>CINEMAS IN TOP CITIES</p>
            <p className='text-[11px] text-[#7f7f7f]'>Cinemas in Mumbai | Cinemas in Delhi-NCR | Cinemas in Chennai | Cinemas in Bengaluru | Cinemas in Hyderabad | Cinemas in Pune | Cinemas in Ahmedabad | Cinemas in Kolkata | Cinemas in Kochi</p>

            <p className='text-xs mt-6 mb-5'>EVENTS IN TOP CITIES</p>
            <p className='text-[11px] text-[#7f7f7f]'>Events in Mumbai | Events in Delhi-NCR | Events in Chennai | Events in Bengaluru | Events in Hyderabad | Events in Pune | Events in Ahmedabad | Events in Kolkata | Events in Kochi</p>

            <p className='text-xs mt-6 mb-5'>PLAYS IN TOP CITIES</p>
            <p className='text-[11px] text-[#7f7f7f]'>Plays in Mumbai | Plays in Delhi-NCR | Plays in Chennai | Plays in Bengaluru | Plays in Hyderabad | Plays in Pune | Plays in Ahmedabad | Plays in Kolkata | Plays in Kochi</p>

            <p className='text-xs mt-6 mb-5'>ACTIVITIES IN TOP CITIES</p>
            <p className='text-[11px] text-[#7f7f7f]'>Things to do in Mumbai | Things to do in Delhi-NCR | Things to do in Chennai | Things to do in Bengaluru | Things to do in Hyderabad | Things to do in Pune | Things to do in Ahmedabad | Things to do in Kolkata | Things to do in Kochi</p>

            <p className='text-xs mt-6 mb-5'>MOVIES IN TOP CITIES</p>
            <p className='text-[11px] text-[#7f7f7f]'>Movies in Mumbai | Movies in Delhi-NCR | Movies in Chennai | Movies in Bengaluru | Movies in Hyderabad | Movies in Pune | Movies in Ahmedabad | Movies in Kolkata | Movies in Kochi</p>

            <p className='text-xs mt-6 mb-5'>COUNTRIES</p>
            <p className='text-[11px] text-[#7f7f7f]'>Indonesia | Singapore | UAE | Sri Lanka | West Indies</p>

            <p className='text-xs mt-6 mb-5'>HELP</p>
            <p className='text-[11px] text-[#7f7f7f]'>About Us | Contact Us | Current Opening | Press Release | Press Coverage | Sitemap | FAQs | Terms and Conditions | Privacy Policy</p>

            <p className='text-xs mt-6 mb-5'>BOOKMYSHOW EXCLUSIVES</p>
            <p className='text-[11px] text-[#7f7f7f]'>Lollapalooza India | Superstar | BookASmile | Corporate Vouchers | Gift Cards | List My Show | Offers | Stream | Buzz | Movie Trailers | </p>

          </div>

          <div className='h-[125px] flex px-8 items-center gap-4'>
            <div className='h-[1px] bg-stone-500 flex-grow'></div>
            <img src='https://in.bmscdn.com/webin/common/icons/logo.svg' className='w-[115px] h-[34px]' />
            <div className='h-[1px] bg-stone-500  flex-grow'></div>

          </div>
          <div className="flex justify-center gap-4">
            <a href="https://www.facebook.com/BookMyShowIN" className="w-9 h-9">
              <svg fill='#5d5d5f' xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 98 98"><path d="M48 .5C21.8.5.5 21.8.5 48S21.8 95.5 48 95.5 95.5 74.2 95.5 48 74.2.5 48 .5zm11.8 49.2h-7.7v27.5H40.6V49.7h-5.4V40h5.4v-6.3c0-4.5 2.1-11.6 11.6-11.6h8.5v9.4h-6.2c-1 0-2.4.5-2.4 2.7v5.7h8.7l-1 9.8z"></path></svg>
            </a>
            <a href="https://twitter.com/BookMyShow/" className="w-9 h-9">
              <svg fill='#5d5d5f' xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 98 98"><path d="M48 .5C21.8.5.5 21.8.5 48S21.8 95.5 48 95.5 95.5 74.2 95.5 48 74.2.5 48 .5zm21.2 36.6v1.4c0 14.4-11 31.1-31.1 31.1-6.2 0-11.9-1.8-16.8-4.9.9.1 1.7.2 2.6.2 5.1 0 9.8-1.7 13.6-4.7-4.8-.1-8.8-3.2-10.2-7.6.7.1 1.4.2 2.1.2 1 0 2-.1 2.9-.4-5-1-8.8-5.4-8.8-10.7v-.1c1.5.8 3.2 1.3 4.9 1.4-2.9-2-4.9-5.3-4.9-9.1 0-2 .5-3.9 1.5-5.5 5.4 6.6 13.4 11 22.5 11.4a10.93 10.93 0 0 1 10.6-13.4c3.1 0 6 1.3 8 3.5 2.5-.5 4.8-1.4 6.9-2.7-.8 2.6-2.6 4.7-4.8 6 2.2-.3 4.3-.8 6.3-1.7-1.3 2.2-3.2 4.1-5.3 5.6z"></path></svg>
            </a>
            <a href="https://www.instagram.com/bookmyshowin/" className="w-9 h-9">
              <svg fill='#5d5d5f' xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 102 102"><path d="M50 59a8.96 8.96 0 0 0 7.3-14.2 8.9 8.9 0 0 0-14.6 0A8.96 8.96 0 0 0 50 59zm19.7-20v-8.7H61V39z"></path><path d="M50 5C25.2 5 5 25.2 5 50s20.2 45 45 45 45-20.2 45-45S74.8 5 50 5zm25.6 39.8v20.9c0 5.4-4.4 9.9-9.9 9.9H34.3c-5.4 0-9.9-4.4-9.9-9.9V34.3c0-5.4 4.4-9.9 9.9-9.9h31.4c5.4 0 9.9 4.4 9.9 9.9v10.5z"></path><path d="M64.1 50c0 7.7-6.2 14-14 14a13.98 13.98 0 0 1-13-19.2h-7.6v20.9c0 2.7 2.2 4.9 4.9 4.9h31.4c2.7 0 4.9-2.2 4.9-4.9V44.8H63c.7 1.5 1.1 3.4 1.1 5.2z"></path></svg>
            </a>
            <a href="https://www.youtube.com/user/BookMyShow/featured" className="w-9 h-9">
              <svg fill='#5d5d5f' xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 102 102"><path d="M43.6 57.7c5.3-2.7 10.5-5.4 15.7-8.2-5.3-2.8-10.5-5.5-15.7-8.2v16.4z"></path><path d="M50 2.5C23.8 2.5 2.5 23.8 2.5 50S23.8 97.5 50 97.5 97.5 76.2 97.5 50 76.2 2.5 50 2.5zm23.9 59.2c-.6 2.6-2.8 4.6-5.4 4.9-6.1.7-12.4.7-18.5.7-6.2 0-12.4 0-18.5-.7-2.6-.3-4.7-2.2-5.4-4.9-.9-3.8-.9-7.8-.9-11.7s0-8 .9-11.7c.6-2.6 2.8-4.6 5.4-4.9 6.1-.7 12.4-.7 18.5-.7 6.2 0 12.4 0 18.5.7 2.6.3 4.7 2.2 5.4 4.9.9 3.8.9 7.8.9 11.7s0 8-.9 11.7z"></path></svg>
            </a>
            <a href="https://www.pinterest.com/bookmyshow/" className="w-9 h-9">
              <svg fill='#5d5d5f' xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 102 102"><path d="M50 2.5C23.8 2.5 2.5 23.8 2.5 50S23.8 97.5 50 97.5 97.5 76.2 97.5 50 76.2 2.5 50 2.5zm4.9 58.1c-2.9 0-5.7-1.6-6.7-3.4l-1.9 7.5c-1.2 4.3-4.7 8.6-4.9 8.9-.2.2-.6.2-.7-.2-.1-.6-1-6 .1-10.4.5-2.2 3.5-14.9 3.5-14.9s-.9-1.7-.9-4.3c0-4 2.3-7.1 5.3-7.1 2.5 0 3.7 1.9 3.7 4.1 0 2.5-1.6 6.2-2.4 9.7-.7 2.9 1.4 5.3 4.3 5.3 5.2 0 8.6-6.6 8.6-14.5 0-6-4-10.5-11.3-10.5-8.3 0-13.4 6.2-13.4 13.1 0 2.4.7 4.1 1.8 5.3.5.6.6.8.4 1.5-.1.5-.4 1.7-.6 2.2-.2.7-.7.9-1.4.7-3.8-1.5-5.6-5.7-5.6-10.4 0-7.7 6.5-17 19.5-17 10.4 0 17.3 7.5 17.3 15.6 0 10.8-5.9 18.8-14.7 18.8z"></path></svg>
            </a>
            <a href="https://www.linkedin.com/company/bookmyshow/" className="w-9 h-9">
              <svg fill='#5d5d5f' xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 102 102"><path d="M50 2.5C23.8 2.5 2.5 23.8 2.5 50S23.8 97.5 50 97.5 97.5 76.2 97.5 50 76.2 2.5 50 2.5zm-7.8 63.9h-8.6V36.3h8.6v30.1zm-4-32c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm34.1 32h-8.6V47.8c0-2.2-.6-3.7-3.3-3.7-4.4 0-5.3 3.7-5.3 3.7v18.6h-8.6V36.3h8.6v2.9c1.2-.9 4.3-2.9 8.6-2.9 2.8 0 8.6 1.7 8.6 11.7v18.4z"></path></svg>
            </a></div>

          <div className=' text-center py-10 text-[#666666] text-[11px] max-w-7xl mx-auto px-4'>
            Copyright 2023 © Bigtree Entertainment Pvt. Ltd. All Rights Reserved.
            <br />The content and images used on this site are copyright protected and copyrights vests with the respective owners. The usage of the content and images on this website is intended to promote the works and no endorsement of the artist shall be implied. Unauthorized use is prohibited and punishable by law
          </div>
        </div>
      </div>
      <div className='lg:hidden h-14 w-full fixed bottom-0 left-0 bg-[#313035] flex justify-around items-center text-[#f0f0f0]'>
        <div className='flex flex-col items-center justify-center'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width='20px' height='20px'><path id="a" fill="#DC3558" d="M22.172 7.792l-4.326 14.375-5.367-1.667c.077-.256.106-.517.093-.774l.002-.056c0-1.57-1.252-2.842-2.797-2.842-1.257 0-2.32.843-2.672 2.002l-5.277-1.638 4.35-14.368 2.052-.99 1.147 1.983 2.051-.99 1.148 1.984 2.051-.99 1.148 1.984 2.05-.991 1.148 1.984 2.052-.99 1.147 1.984zM6.353 16.005a.567.567 0 0 0 .51-.16.582.582 0 0 0 .172-.416V8.981H9.22v6.448a.572.572 0 0 0 .979.417.585.585 0 0 0 .173-.417V8.981h1.091a1.104 1.104 0 0 1 1.092 1.11v5.338a.57.57 0 0 0 .979.417.584.584 0 0 0 .173-.417V10.09c0-1.108-.781-2.053-1.856-2.245a2.21 2.21 0 0 0-.388-.035H6.46a.576.576 0 0 0-.576.585v7.033c0 .29.194.527.47.576zm8.317 3.065c.035.006.07.01.106.009.483 0 .949-.158 1.346-.456.368-.272.648-.678.812-1.175l.633-2.168 2.001-6.776a.595.595 0 0 0-.388-.741l-.041-.01c-.301-.053-.594.123-.666.4l-1.461 4.923-1.447-4.925a.593.593 0 0 0-.711-.387.593.593 0 0 0-.384.74l1.945 6.6-.594 2.013c-.14.473-.56.791-1.044.791a.57.57 0 0 0-.577.585c0 .29.194.527.47.577z"></path></svg>
          <p>Home</p>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <svg width="20px" height="20px" viewBox="0 0 24 24" fill="#f0f0f0" xmlns="http://www.w3.org/2000/svg" ><path d="M1.56 21V9.8H3.66V19.152H6.418V21H1.56ZM7.39281 21V9.8H9.49281V21H7.39281ZM12.0234 21L10.3994 9.8H12.5694L13.3954 15.414L13.5214 19.152H13.9134L14.0394 15.414L14.8654 9.8H17.0354L15.4114 21H12.0234ZM17.9373 21V9.8H22.7813V11.648H20.0373V14.378H22.6413V16.226H20.0373V19.152H22.7813V21H17.9373Z" fill="#f0f0f0"></path><path  d="M10.4449 7.99819C10.3888 7.99843 10.3335 7.98454 10.2836 7.95769L8.49474 6.97447L6.70592 7.95769C6.64783 7.98975 6.58234 8.00407 6.51689 7.999C6.45144 7.99394 6.38866 7.9697 6.33567 7.92904C6.28269 7.88837 6.24164 7.83292 6.21719 7.76898C6.19273 7.70504 6.18585 7.63518 6.19733 7.56734L6.54808 5.49412L5.10299 4.02113C5.0579 3.9739 5.02592 3.91466 5.01047 3.84979C4.99502 3.78491 4.99669 3.71684 5.0153 3.65289C5.03563 3.58744 5.07303 3.52929 5.12325 3.48502C5.17346 3.44076 5.23449 3.41217 5.29941 3.40248L7.29868 3.09683L8.17906 1.20773C8.20779 1.14547 8.25263 1.09296 8.30846 1.05623C8.36429 1.01949 8.42885 1 8.49474 1C8.56063 1 8.62519 1.01949 8.68102 1.05623C8.73685 1.09296 8.78169 1.14547 8.81041 1.20773L9.70132 3.09315L11.7006 3.3988C11.7655 3.40848 11.8265 3.43708 11.8768 3.48134C11.927 3.5256 11.9644 3.58376 11.9847 3.6492C12.0033 3.71316 12.005 3.78123 11.9895 3.8461C11.9741 3.91098 11.9421 3.97021 11.897 4.01745L10.4519 5.49044L10.8027 7.56366C10.8152 7.6327 10.8086 7.70406 10.7838 7.76931C10.7589 7.83456 10.7168 7.89098 10.6624 7.93191C10.5989 7.97864 10.5224 8.00195 10.4449 7.99819V7.99819Z" fill="#f0f0f0"></path></svg>
          <p>Events</p>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"   width='20px' height='20px'><path fill="#f0f0f0" d="M12 11.044a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zM8.5 12h7a4.5 4.5 0 0 1 4.5 4.5V19a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2.5A4.5 4.5 0 0 1 8.5 12z"></path></svg>
          <p>Profile</p>
        </div>
      </div>
    </div>
  )
}

export default Footer