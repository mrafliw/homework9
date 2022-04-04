const Playlist = ({ handleAddPlaylistOnChange, handleAddPlaylistOnSubmit, addPlaylistData, playlistID, selectedTracks }) => {
    return (
        <div className="playlist-form">
            <h2>Create Playlist</h2>
            <form className="addPlaylistForm" onSubmit={handleAddPlaylistOnSubmit}>
                <label htmlFor="title">Title</label><br />
                <input className="title" id="title" type="text" value={addPlaylistData.title} onChange={handleAddPlaylistOnChange} name="title" minLength="10" />
                <br />
                <label htmlFor="description"> Description </label><br />
                <textarea className="description" id="description" type="text" value={addPlaylistData.description} onChange={handleAddPlaylistOnChange} name="description" />
                <br />
                <button className="selectButton" type="submit" value="Submit">Submit</button>
            </form>
        </div>
    )
}

export default Playlist;