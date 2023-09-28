import {
  Avatar,
  Badge,
  Button,
  Image,
  NextUIProvider,
} from "@nextui-org/react";
import "./App.css";

function App() {
  return (
    <NextUIProvider>
      <Badge content="5" color="primary">
        <Avatar
          radius="md"
          size="lg"
          src="https://i.pravatar.cc/300?u=a042581f4e29026709d"
        />
      </Badge>
      <Avatar
        isBordered
        src="https://i.pravatar.cc/150?u=a04258114e29026708c"
        className="w-20 h-20 text-large"
      />
      <Button color="primary">Button</Button>
      <Image
        isBlurred
        width={240}
        src="https://nextui-docs-v2.vercel.app/images/album-cover.png"
        alt="NextUI Album Cover"
        className="m-5"
      />
    </NextUIProvider>
  );
}

export default App;
