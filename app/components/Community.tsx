import { MdOutlineStarPurple500 } from "react-icons/md";
const Community = () => {
  const reviews = [
    {
      id: "1",
      ratings: "5",
      text: "I used to spend my entire Saturday at creek road market. Now, I just send my list and get my items fresh before noon. Life saver!",
      icon: "A",
      name: "Ayo B.",
      profession: "Busy Professional",
    },
    {
      id: "2",
      ratings: "5",
      text: "The receipt transparency is what won me over. I pay exactly what it costs at the market, plus a small service fee. No surprises.",
      icon: "O",
      name: "Uche O.",
      profession: "Parent of Three",
    },
    {
      id: "3",
      ratings: "5",
      text: "Quality is my priority. The shoppers at MarketMate actually listen to my notes about tomatoes being 'hard' and onions being 'big'.",
      icon: "S",
      name: "Fatima S",
      profession: "Catering Business Owner",
    },
  ];
  return (
    <section className="mt-14 bg-[#e8f5e24d] pb-16">
      <div className="w-[93%] m-auto pt-18">
        <h1 className="text-center sm:text-3xl text-2xl font-bold pb-14">
          Hear from our community{" "}
        </h1>
        <div className="flex gap-6 flex-wrap">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white grow basis-50 px-7 py-5 rounded-2xl">
              <div className="flex">
                <MdOutlineStarPurple500 fill="#3ea40b" />
                <MdOutlineStarPurple500 fill="#3ea40b" />
                <MdOutlineStarPurple500 fill="#3ea40b" />
                <MdOutlineStarPurple500 fill="#3ea40b" />
                <MdOutlineStarPurple500 fill="#3ea40b" />
              </div>
              <div className="py-4">
                <p className="italic md:text-base text-sm text-gray-500">&quot;{review.text}&quot;</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-[#3ea40b33] flex items-center justify-center h-9 w-9 rounded-full">
                  <p className="text-[#3ea40b] font-semibold">{review.icon}</p>
                </div>
                <div>
                    <p className="font-semibold">{review.name}</p>
                    <p className="text-gray-500 text-sm">{review.profession}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Community;
