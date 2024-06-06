import { ShoppingCart } from "lucide-react";

export default function NavBar() {
  return (
    <>
      <div className="flex bg-colors-background border-b-small border-neutral-800">
        <ul className="flex flex-row justify-between w-screen p-3">
          <li className="text-white">Gronks</li>
          <li>
            <a href="#">
              <ShoppingCart color="#e4f2e3" />
              <p className="absolute top-0 right-1 ">1</p>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
