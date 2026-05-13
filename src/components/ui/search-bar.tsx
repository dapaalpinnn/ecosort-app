import { useState, useRef, useEffect } from "react";
import { Search, ListFilter } from "lucide-react";

type SearchBarProps = {
  onSearch: (keyword: string) => void;
  onFilter: (item: string) => void;
  placeholder?: string;
  dropDown?: string[];
};

function SearchBar({ onSearch, onFilter, placeholder = "Search...", dropDown = []}: SearchBarProps) {
  const [keyword, setKeyword] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current &&!dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown",handleClickOutside);
    return () => {
      document.removeEventListener("mousedown",handleClickOutside);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(keyword);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setKeyword(value);
    onSearch(value);
  };

  const handleFilterClick = (item: string) => {
    onFilter(item);
    setOpen(false);
  };

  return (
    <div className="flex items-center gap-3 w-full">
      <div className="flex items-center gap-2 h-12 rounded-4xl border-2 border-muted-foreground px-4 py-2 w-full text-muted-foreground">
        <Search className="w-5 h-5 text-gray-500" />
        <form
          onSubmit={handleSubmit}
          className="w-full"
        >
          <input
            type="text"
            placeholder={placeholder}
            value={keyword}
            onChange={handleChange}
            className="w-full outline-none"
          />
        </form>
      </div>

      <div
        className="relative"
        ref={dropdownRef}
      >
        <button
          type="button"
          className="flex items-center justify-center h-12 w-12 rounded-4xl border-2 border-muted-foreground hover:bg-white"
          onClick={() =>setOpen(!open)}
        >
          <ListFilter size={25} />
        </button>

        {open && (
          <div
            className="absolute right-0 top-full mt-2 w-48 rounded-xl border bg-white shadow-lg overflow-hidden"
          >
            {dropDown.map((item) => (
              <button
                key={item}
                onClick={() => handleFilterClick(item)}
                className="block w-full px-4 py-2 text-left hover:bg-gray-100"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchBar;