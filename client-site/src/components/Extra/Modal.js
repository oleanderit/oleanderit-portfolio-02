import { Component } from "react";
import { FiPlayCircle } from "react-icons/fi";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";

export class Modal extends Component {
	constructor() {
		super();
		this.state = {
			isOpen: false,
		};
		this.openModal = this.openModal.bind(this);
	}

	openModal() {
		this.setState({ isOpen: true });
	}
	render() {
		return (
			<div>
				<div>
					<ModalVideo
						channel="youtube"
						isOpen={this.state.isOpen}
						videoId="x48N2AK-FKg"
						onClose={() => this.setState({ isOpen: false })}
					/>
					<button
						className="text-indigo-600 border-0 mt-1 mb-0"
						onClick={this.openModal}
					>
						<span className="text-[2.8rem]">
							<FiPlayCircle strokeWidth="0.7" />
						</span>
					</button>
				</div>
			</div>
		);
	}
}

export default Modal;
