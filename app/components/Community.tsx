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
    <section className="mt-14 bg-[#e8f5e24d]">
      <div className="w-[93%] m-auto pt-18">
        <h1 className="text-center sm:text-3xl text-2xl font-bold pb-14">
          Hear from our community{" "}
        </h1>
        <div>
          {reviews.map((review) => (
            <div key={review.id}>
              <div className="flex">
                <MdOutlineStarPurple500 fill="#3ea40b" />
                <MdOutlineStarPurple500 fill="#3ea40b" />
                <MdOutlineStarPurple500 fill="#3ea40b" />
                <MdOutlineStarPurple500 fill="#3ea40b" />
                <MdOutlineStarPurple500 fill="#3ea40b" />
              </div>
              <div>
                <p>{review.text}</p>
              </div>
              <div>
                <div>
                  <p>{review.icon}</p>
                </div>
                <div>
                    <p>{review.name}</p>
                    <p>{review.profession}</p>
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
