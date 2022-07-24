import api from "../shared/api";

function VideoDeleteModal({ closeModal, checkedList }) {
    console.log(checkedList);

    const deleteRecording = async (checkedList) => {
        await api.delete(`/api/feedback/deleterecording/${[checkedList]}`)
            .then(res => {
                console.log(res.data);
                window.location.reload(true);
            })
    }

    console.log(checkedList);
    return (

        <div className="video-delete-modal">
            <div className="video-delete-modal-content">
                <div className="video-delete-modal-body">
                    선택한 영상을 삭제하시겠습니까?
                </div>
                <div className="video-delete-modal-footer">
                    <button className="btn-yes" onClick={() => closeModal(false)}>취소</button>
                    <button className="btn-cancel" onClick={() => deleteRecording(checkedList)}>삭제</button>
                </div>
            </div>
        </div>
    )
}

export default VideoDeleteModal