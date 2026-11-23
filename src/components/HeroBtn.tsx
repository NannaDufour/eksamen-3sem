import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroBtn = () => {
  return (
    <div className="flex gap-4">
      <Button variant="default">
        <Link href="/events">VIEW EVENTS</Link>
      </Button>

      <Button variant="secondary">
        <Link href="/book-table">BOOK TABLE</Link>
      </Button>
    </div>
  );
};

export default HeroBtn;
