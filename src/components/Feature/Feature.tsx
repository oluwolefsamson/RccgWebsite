import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import FeatureImg from "../../assets/images/feature.jpg";

export default function Feature() {
  return (
    <div className="overflow-hidden  py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h1 className=" font-semibold leading-7 text-indigo-600 mb-6">
                Our Features
              </h1>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    Transformative Worship Experience
                  </AccordionTrigger>
                  <AccordionContent>
                    At Grace Community Church Family, we believe in the power of
                    authentic worship. Every Sunday, we gather as a community to
                    encounter the presence of God through inspiring praise, deep
                    worship, and life-changing messages. Our services are
                    designed to refresh your spirit, renew your mind, and draw
                    you closer to God.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    Community Outreach and Care
                  </AccordionTrigger>
                  <AccordionContent>
                    We are passionate about making a positive impact in the
                    community around us. Through our outreach programs, we
                    extend the love of Christ to those in need. From feeding the
                    hungry to supporting families in crisis, we strive to be a
                    beacon of hope and service, embodying the heart of Jesus
                    through practical acts of kindness.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    Bible Study and Spiritual Growth
                  </AccordionTrigger>
                  <AccordionContent>
                    Spiritual growth is at the core of who we are. Our weekly
                    Bible studies offer an opportunity to dive deeper into the
                    Word of God, engage in thoughtful discussions, and apply
                    biblical principles in daily life. Whether you're just
                    starting your faith journey or looking to grow deeper, our
                    studies provide nourishment for your soul.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>
                    Vibrant Children and Youth Ministry
                  </AccordionTrigger>
                  <AccordionContent>
                    We are dedicated to raising up the next generation in
                    Christ. Our children’s and youth ministries offer engaging,
                    age-appropriate activities that help young hearts and minds
                    grow in their faith. Through creative Bible lessons,
                    interactive events, and a nurturing environment, we aim to
                    inspire our children and youth to build a lasting
                    relationship with God.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>Prayer and Pastoral Care</AccordionTrigger>
                  <AccordionContent>
                    At Grace Community Church Family, we believe in the power of
                    prayer. Our prayer team is here to walk with you through the
                    highs and lows of life, providing spiritual support and
                    encouragement. We also offer pastoral counseling for anyone
                    seeking guidance, healing, or a listening ear, knowing that
                    God’s grace is sufficient for every need.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                  <AccordionTrigger>
                    Family and Marriage Support
                  </AccordionTrigger>
                  <AccordionContent>
                    We believe that strong families build a strong community.
                    Our family and marriage ministry is dedicated to helping
                    couples and families grow in love, faith, and unity. Through
                    workshops, counseling, and special events, we aim to equip
                    families to thrive together in God’s love and purpose.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          <img
            alt="feature image"
            src={FeatureImg}
            width={2432}
            height={1442}
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  );
}
