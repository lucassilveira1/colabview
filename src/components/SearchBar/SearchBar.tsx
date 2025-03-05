import { ChangeEvent } from "react";
import searchIcon from "../../assets/icons/Default.svg";
interface SearchBarProps {
    value: string;
    onSearch: (searchTerm: string) => void;
}

export const SearchBar = ({ value, onSearch }: SearchBarProps) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        onSearch(e.target.value);
    };

    return (
        <div className="search-container">
            <input
                type="text"
                placeholder="Pesquisar"
                value={value}
                onChange={handleChange}
            />
            <img src={searchIcon} id="searchIcon" />
        </div>
    );
};
