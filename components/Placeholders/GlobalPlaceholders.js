import GlobalPlaceholder from './GlobalPlaceholder';
export default function GlobalPlaceholders ({rows = 4}) {
    const placeholders = [];
    for(let i = 1; i<rows; i++){
        placeholders.push(
            <GlobalPlaceholder key={"GlobalPlaceholder"+i} />
        )
    }
    return(
        <>
            <div className="ph-item ph-border-none ph-bg-none m-0 px-1 pb-0">
                <div className="ph-row">
                    <div className="ph-col-6 big"></div>
                    <div className="ph-col-6 big"></div>
                </div>
                <div className="ph-row">
                    <div className="ph-col-6 big"></div>
                    <div className="ph-col-6 big"></div>
                </div>
                <div className="ph-row">
                    <div className="ph-col-6 big"></div>
                    <div className="ph-col-6 big"></div>
                </div>
            </div>
            { placeholders }
        </>
    )
}