import { useDispatch, useSelector } from "react-redux";
import { startSaveNote, startUploading } from "../../actions/notes";


const NotesAppBar = () => {

    const { active:note } = useSelector( state => state.notes );
    const dispatch = useDispatch();

    const handleSave = () => {
        dispatch( startSaveNote( note ));
    }

    const handlePictureClick = () => {
        document.querySelector('#fileSelector').click();
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if ( file ) {
            dispatch( startUploading( file ) );
        }
    }

    return (
        <div className="notes__appbar">
            <span>8 de Marzo de 2021</span>

            <input 
                id="fileSelector"
                type="file" 
                style={{ display: 'none'}}
                name="file"
                onChange={ handleFileChange }
            />

            <div>
                <button
                    className="btn"
                    onClick={ handlePictureClick }
                >
                    Picture
                </button>
                
                <button
                    className="btn"
                    onClick= { handleSave }
                >
                    Save
                </button>
            </div>
        </div>
    )
}

export default NotesAppBar;
