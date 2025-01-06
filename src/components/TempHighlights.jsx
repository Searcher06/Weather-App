import { HighlightsContainer } from "./HighlightsContainer";

export function TempHighlights({Data}){
    return <>
    <div className="today-highlight">
        <div className="up">{"Today's highlight"}</div>
        <HighlightsContainer Data={Data} />              
    </div>
    </>
}