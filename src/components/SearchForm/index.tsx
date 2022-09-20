import { MagnifyingGlass } from "phosphor-react";
import { useForm } from "react-hook-form";
import { SearchFormContainer } from "./styles";
import * as zod from 'zod';
import {zodResolver} from "@hookform/resolvers/zod"
import { useContext } from "react";
import { TransactionContext } from "../../contexts/TransactionContenxt";

const searchFormSchema = zod.object({
  query: zod.string()
})

type SearchFormInputs = zod.infer<typeof searchFormSchema>;

export function SearchForm() {

  const {fetchTransactions} = useContext(TransactionContext)

  const { register, handleSubmit, formState: {
    isSubmitting
  }} = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema)
  });

 async function handleSearchTransactions(data: SearchFormInputs){
    await fetchTransactions(data.query)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input placeholder="Busque por transações" {...register("query")} />
      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  );
}
