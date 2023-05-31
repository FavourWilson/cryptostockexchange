import { Card } from "../lib";

const SmallCard = () => {
  const content = [
    { title: "$122B", subTitle: "Trading volume" },
    { title: "<1 min", subTitle: "Registration" },
    { title: "50+", subTitle: "Supported countries" },
    { title: "1.5M", subTitle: "Active trading users" },
  ];
  return (
    <>
      <div className="w-full -translate-y-10 lg:-translate-y-20 absolute">
        <Card className="mx-auto max-w-sm lg:max-w-5xl px-1 lg:px-3.5">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-1 place-content-center">
            {content.map((x, i) => (
              <div key={`a${i}`} className="flex flex-col items-center">
                <h1 className="text-3xl font-bold py-5 text-main-900">
                  {x.title}
                </h1>
                <p className="font-medium">{x.subTitle}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </>
  );
};

export default SmallCard;
