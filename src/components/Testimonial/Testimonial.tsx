import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";

const testimonies = [
  {
    name: "Grace",
    username: "@grace",
    body: "My life has completely changed after joining the church. I have found peace and purpose through God's word.",
    img: "https://avatar.vercel.sh/grace",
  },
  {
    name: "Michael",
    username: "@michael",
    body: "I was going through a tough time, but the community here embraced me, and I've grown spiritually like never before.",
    img: "https://avatar.vercel.sh/michael",
  },
  {
    name: "Sarah",
    username: "@sarah",
    body: "Through prayer and fellowship at this church, my family and I have experienced true transformation.",
    img: "https://avatar.vercel.sh/sarah",
  },
  {
    name: "David",
    username: "@david",
    body: "This church has given me a sense of belonging and spiritual growth that I had been longing for.",
    img: "https://avatar.vercel.sh/david",
  },
  {
    name: "Emily",
    username: "@emily",
    body: "I’ve found a loving, supportive community here. My faith has deepened since I started attending.",
    img: "https://avatar.vercel.sh/emily",
  },
  {
    name: "John",
    username: "@john",
    body: "Being part of this church has renewed my hope and strengthened my relationship with God.",
    img: "https://avatar.vercel.sh/john",
  },
];

const firstRow = testimonies.slice(0, testimonies.length / 2);
const secondRow = testimonies.slice(testimonies.length / 2);

const TestimonyCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export default function Testimonial() {
  return (
    <div>
      <h2 className="heading font-bold ml-2 text-blue-700">Testimonials</h2>{" "}
      <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((testimony) => (
            <TestimonyCard key={testimony.username} {...testimony} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((testimony) => (
            <TestimonyCard key={testimony.username} {...testimony} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
      </div>
    </div>
  );
}
