import React, { Component } from 'react';

class Search extends Component {
    render() {
        return(
            <div>
                <form className="todoForm form-horizontal" onSubmit={this.props.onSubmit}>
                    <div className="form-group">
						<label htmlFor="task" className="col-md-2 control-label">Task</label>
						<div className="col-md-10">
							<input type="text" id="task" value={this.props.item} onChange={this.props.handleChange} ref="task" className="form-control" placeholder="What do you need to do?" />
					    </div>
					</div>
					<div className="row">
						<div className="col-md-10 col-md-offset-2 text-right">
							<input type="submit" value="Save Item" className="btn btn-primary" />
						</div>
					</div>
                </form>
            </div>
        );
    }
}

export default Search;
