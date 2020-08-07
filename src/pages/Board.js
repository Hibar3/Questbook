import styles from '../styles/Home.module.css'

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
//import { HTMLFlipBook } from 'react-pageflip';

export default function Board() {

    return (
        <div>
            <h1>aBoqrd</h1>
            {/* <HTMLFlipBook width={300} height={500}>
                <div className="demoPage">Page 1</div>
                <div className="demoPage">Page 2</div>
                <div className="demoPage">Page 3</div>
                <div className="demoPage">Page 4</div>
            </HTMLFlipBook> */}
            <DragDropContext

            >

                <div>Hello world</div>


            </DragDropContext>

        </div>
    );
}