import React from 'react';
import { Baby, Users, Heart, BookOpen, Music, Globe, HandHeart, Church, GraduationCap, PrinterIcon as Prison, Book, MapPin, HelpingHand as PrayingHands, MessageCircle, Megaphone } from 'lucide-react';
import { Button } from './ui/button';

const ministryGroups = [
  {
    title: "Core Ministries",
    ministries: [
      {
        title: "Ward Prayers (Care cell)",
        icon: PrayingHands,
        description: "124 Ward leaders across three regions gather every Wednesday at 7:00 pm for fellowship, leading prayers and building believers in the word of God.",
      },
      {
        title: "Children's Ministry",
        icon: Baby,
        description: "Serving 300+ children with 31 dedicated Sunday school teachers, offering structured curriculum and annual VBS programs reaching 3000+ children.",
      },
      {
        title: "Youth Ministry",
        icon: Users,
        description: "400+ active young members serving with zeal through Youth Fellowships and Prayer services every Tuesday at 7:00 pm.",
      },
    ]
  },
  {
    title: "Outreach & Support",
    ministries: [
      {
        title: "Media Ministry",
        icon: Music,
        description: "Recording and sharing Sunday Sermons through DVDs, YouTube, and live webcasting services via Facebook.",
      },
      {
        title: "Missions",
        icon: Globe,
        description: "Supporting missionaries through prayers and finance, with a special focus on buying lands for churches in North India.",
      },
      {
        title: "Care for the Needy",
        icon: HandHeart,
        description: "Providing support during natural disasters and helping with education, marriage expenses for those in need.",
      },
    ]
  },
  {
    title: "Special Ministries",
    ministries: [
      {
        title: "Cornelius Ministry",
        icon: Church,
        description: "Supporting believers in organizing Gospel Meetings in their homes, reaching out to friends and relatives.",
      },
      {
        title: "Students' Ministry",
        icon: GraduationCap,
        description: "Organizing Care Groups in colleges and special prayers for students (Exambiance).",
      },
      {
        title: "Prison Ministry",
        icon: Prison,
        description: "Weekly gospel preaching at Pondicherry Central Jail through songs, dramas, and counseling.",
      },
    ]
  },
  {
    title: "Teaching & Development",
    ministries: [
      {
        title: "Hope Center",
        icon: Heart,
        description: "Counseling and prayer center open Monday to Friday, 9:00 AM to 7:00 PM, offering guidance to newcomers.",
      },
      {
        title: "Teaching and Training",
        icon: BookOpen,
        description: "Daily Bible Study Hour and specialized training for Ward Leaders and Sunday school teachers.",
      },
      {
        title: "Pokkisham",
        icon: Book,
        description: "Annual mega memory verse competition encouraging scripture memorization.",
      },
    ]
  },
  {
    title: "SUGAM Ministries",
    ministries: [
      {
        title: "Village Ministry",
        icon: MapPin,
        description: "56 active village ministries with weekly evangelism and monthly medical camps.",
      },
      {
        title: "Sunday School Outreach",
        icon: Baby,
        description: "Operating in 100+ locations, reaching 3000+ children weekly with the gospel.",
      },
      {
        title: "Supporting Ministries",
        icon: Megaphone,
        description: "Prayer Walkers, Partners, Gospel Team, and Action Warriors supporting our mission.",
      },
    ]
  }
];

const Ministries = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-church-gold font-medium tracking-wider">OUR MINISTRIES</span>
          <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-6">Serving Our Community</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We serve the Lord by catering to the needs of everyone, following the Great Commission 
            of Jesus Christ (Matthew 28:18-20).
          </p>
        </div>

        <div className="space-y-16">
          {ministryGroups.map((group) => (
            <div key={group.title} className="space-y-8">
              <h3 className="text-2xl font-bold text-gray-900 text-center">{group.title}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {group.ministries.map((ministry) => (
                  <div
                    key={ministry.title}
                    className="bg-white rounded-lg shadow-sm p-8 hover:shadow-md transition-shadow"
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="bg-church-green/10 p-4 rounded-full mb-6">
                        <ministry.icon className="w-8 h-8 text-church-green" />
                      </div>
                      <h4 className="text-xl font-semibold mb-4">{ministry.title}</h4>
                      <p className="text-gray-600 mb-6">{ministry.description}</p>
                      <Button 
                        variant="outline"
                        className="border-church-green text-church-green hover:bg-church-green hover:text-white"
                      >
                        Learn More
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold mb-4">Five Year Vision Plan</h3>
            <ul className="text-gray-600 space-y-3">
              <li>• Initiate ministries in 100 villages with 100 souls each</li>
              <li>• Purchase lands and build 50 house churches</li>
              <li>• Transform 100 Sunday Schools into Prayer Centers</li>
              <li>• Reach 100 souls in every center</li>
              <li>• Construct 50 prayer centers</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ministries;