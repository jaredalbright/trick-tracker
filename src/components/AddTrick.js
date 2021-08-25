import { useState } from "react";
import AddByForm from "./AddByForm";
import AddBySearch from "./AddBySearch";
import Button from "./Button";
import LastAddStep from "./LastAddStep";
import SearchResult from "./SearchResult";

const AddTrick = ({userInfo, trickMenu, setRefresh}) => {
  const [showSearch, setShowSearch] = useState(false);
  const [showType, setType] = useState(false);
  const [query, setQuery] = useState("");
  const [newTrick, setNewTrick] = useState(null);

  return (
    <div className="form-container">
      <div className="form-btn">
        <Button
          cName="button"
          text={showType ? "Search by text" : "Search by form"}
          onClick={() => {setType(!showType); console.log({showType})}}
        />
      </div>
      {showType ? (
        <AddByForm
          onSearch={setQuery}
          toggleSearch={() => {setShowSearch(!showSearch); setNewTrick(null)}}
        />
      ) : (
        <AddBySearch
          onSearch={setQuery}
          toggleSearch={() => {setShowSearch(!showSearch); setNewTrick(null)}}
        />
      )}
      {showSearch && (
        <SearchResult
          query={query}
          type = {showType}
          toggleSearch={() => setShowSearch(!showSearch)}
          returnTrick={setNewTrick}
        />
      )}
      {
        (newTrick !== null) && (
          <LastAddStep trick = {newTrick} userInfo = {userInfo} trickMenu = {trickMenu} refresh={setRefresh}/>
        )
      }
    </div>
  );
};

export default AddTrick;
