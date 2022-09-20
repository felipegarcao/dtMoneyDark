import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./styles";


export function SearchForm(){
  return (
   <SearchFormContainer>
      <input placeholder="Busque por transações" />
      <button type="submit">
        <MagnifyingGlass size={20} />
        Buscar
      </button>
   </SearchFormContainer>
  )
}