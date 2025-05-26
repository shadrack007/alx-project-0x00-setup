import Button from "@/components/Button";
import Card from "@/components/Card";

const Landing: React.FC = () => {
  return (
    <div className="flex flex-col items-center pb-4">
      <h1 className="text-xl font-extralight">Landing Page</h1>
      <Card />

      <div className="mt-4 space-y-4">
        <h2 className="font-bold">Custom Buttons</h2>

        <div>
          <p className="font-semibold">Small rounded buttons</p>
          <div className="flex gap-3">
            <Button title="Small sm" styles="text-sm rounded-sm" />
            <Button title="Small md" styles="text-sm rounded-md" />
            <Button title="Small lg" styles="text-sm rounded-lg" />
          </div>
        </div>

        <div>
          <p className="font-semibold">Medium rounded buttons</p>
          <div className="flex gap-3">
            <Button title="Medium sm" styles="text-base rounded-sm" />
            <Button title="Medium md" styles="text-base rounded-md" />
            <Button title="Medium lg" styles="text-base rounded-lg" />
          </div>
        </div>

        <div>
          <p className="font-semibold">Large rounded buttons</p>
          <div className="flex gap-3">
            <Button title="Large sm" styles="text-lg rounded-sm" />
            <Button title="Large md" styles="text-lg rounded-md" />
            <Button title="Large lg" styles="text-lg rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
