/**
 * @jsx React.DOM
 */

$.ajax({
    type : "GET",
    dataType : "json",
    url : "./data/data.json",
    success: function(data){
        React.renderComponent(
            <Form data={data} />,
            document.getElementById('content')
        )
    }
});

var Form = React.createClass({
    render: function() {
        if(this.props.data.status == 'Success')
            return (
                <form className='commentBox'>
                    <FieldList data={this.props.data.form.questions} />
                    <div className="submit-area">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            );
        else
            return (
                <div>{this.props.data.message}</div>
            )
    }
});

var FieldList = React.createClass({
    render: function() {
        var rows = this.props.data.map(function(rowData) {
            return <Field data={rowData} />;
        }, this);
        return <div>{rows}</div>;
    }
});

var Field = React.createClass({
    render: function() {
        switch(this.props.data.field_type){
            case 'Radio':
                return (
                    <Radio data={this.props.data} />
                    )
            case 'Text':
                return (
                    <Text data={this.props.data} />
                    )
            case 'Textarea':
                return (
                    <Textarea data={this.props.data} />
                    )
            case 'Select':
                return (
                    <Select data={this.props.data} />
                    )
        }
    }
});

var Text = React.createClass({
    render: function() {
        return (
            <div className="form-field">
                <label htmlFor={this.props.data.name} className={this.props.data.required ? 'require': ''}>{this.props.data.label}</label>
                <input type="text" name={this.props.data.name} />
            </div>
        )
    }
});

var Radio = React.createClass({
    render: function() {
        var rows = this.props.data.options.map(function(rowData) {
            rowData.name = this.props.data.name;
            return <RadioInput data={rowData} />;
        }, this);

        return (
            <div className="form-field">
                <label htmlFor={this.props.data.name} className={this.props.data.required ? 'require': ''}>{this.props.data.label}</label>
                <div className="radio-wrapper">{rows}</div>
            </div>
            )
    }
});

var RadioInput = React.createClass({
    render: function() {
        return (
            <label>
                <input type="radio" name={this.props.data.name} value={this.props.data.value} />{this.props.data.label}</label>
            )
    }
});

var Textarea = React.createClass({
    render: function() {
        return (
            <div className="form-field">
                <label htmlFor={this.props.data.name} className={this.props.data.required ? 'require': ''}>{this.props.data.label}</label>
                <textarea type="text" name={this.props.data.name}></textarea>
            </div>
            )
    }
});

var Select = React.createClass({
    render: function() {
        var rows = this.props.data.options.map(function(rowData) {
            return <SelectOption data={rowData} />;
        }, this);

        return (
            <div className="form-field">
                <label htmlFor={this.props.data.name} className={this.props.data.required ? 'require': ''}>{this.props.data.label}</label>
                <select name={this.props.data.name} >
                    <option value="">-please select-</option>
                    {rows}
                </select>
            </div>
            )
    }
});

var SelectOption = React.createClass({
    render: function() {
        return (
            <option value={this.props.data.value}>{this.props.data.label}</option>
        )
    }
});