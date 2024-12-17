"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { Input } from "@/components/ui/input";
import { checkPathnameChangePlaceholder } from "@/lib/check-pathname-change-placeholder";
import { useEffect, useState } from "react";

export function Search() {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  const [placeholder, setPlaceholder] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }

    replace(`${pathname}?${params.toString()}`);
  }, 300);
  
  useEffect(() => {
    setPlaceholder(pathname);
    setSearchTerm(searchParams.get("query")?.toString() || '');
  }, [pathname, searchParams]);
  
  return (
    <div className="w-full">
      <Input
        type="text"
        placeholder={checkPathnameChangePlaceholder(placeholder)}
        className="w-full"
        onChange={(e) => {
          setSearchTerm(e.target.value);
          handleSearch(e.target.value);
        }}
        value={searchTerm}
      />
    </div>
  );
}