//hooks
import { useFetchDocuments } from "../../hooks/useFetchDocuments"
import { useQuery } from "../../hooks/useQuery"

const search = () => {
    const query = useQuery()
    const search = query.get("q")

  return (
    <div>
      <h2>Search</h2>
      <p>{search}</p>
    </div>
  )
}

export default search
