import React, { Component } from 'react';
import { View, Text, FlatList, ScrollView, Modal, Button, StyleSheet } from 'react-native';
import { Card, Icon, Rating, Input } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import { postFavorite, postComment } from '../redux/ActionCreators';

const mapStateToProps = (state) => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        favorites: state.favorites
    }
}

const mapDispatchToProps = dispatch => ({
    postFavorite: (dishId) => dispatch(postFavorite(dishId)),
    postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment))
})


function RenderDish(props) {
    const dish = props.dish;
    if (dish != null) {
        return (
            <View>
                <Card
                    featuredTitle={dish.name}
                    image={{ uri: baseUrl + dish.image }}
                >
                    <Text style={{ margin: 10 }}>
                        {dish.description}
                    </Text>
                    <View style={{ justifyContent: "center", alignItems: "center", flexDirection: 'row' }}>
                        <Icon
                            raised
                            reverse
                            name={props.favorite ? 'heart' : 'heart-o'}
                            type='font-awesome'
                            color='#f50'
                            onPress={() => props.favorite ? console.log('Already favorite') : props.onPress()}
                        />
                        <Icon
                            raised
                            reverse
                            name='pencil'
                            type='font-awesome'
                            color='#512DA8'
                            onPress={() => props.toggleModal()}
                        />
                    </View>
                </Card>
            </View>
        );
    }
    else {
        return (<View></View>);
    }
}


function RenderComments(props) {
    const comments = props.comments;

    const renderCommentItem = ({ item, index }) => {

        return (
            <View key={index} style={{ margin: 10 }}>
                <Text style={{ fontSize: 14 }}>{item.comment}</Text>
                <Text style={{ fontSize: 12 }}>{item.rating} Stars</Text>
                <Text style={{ fontSize: 12 }}>{'-- ' + item.author + ', ' + item.date} </Text>
            </View>
        );
    };

    return (
        <Card title='Comments' >
            <FlatList
                data={comments}
                renderItem={renderCommentItem}
                keyExtractor={item => item.id.toString()}
            />
        </Card>
    );
}


class Dishdetail extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showModal: false,
            rating: '',
            author: '',
            comment: ''
        }
    }

    markFavorite(dishId) {
        this.props.postFavorite(dishId);
    }

    toggleModal() {
        this.setState({ showModal: !this.state.showModal });
    }

    handelSubmit() {
        this.toggleModal();
        this.props.postComment(this.props.route.params.dishId, this.state.rating, this.state.author, this.state.comment);
    }


    static navigationOptions = {
        title: 'Dish Details'
    }

    render() {
        const dishId = this.props.route.params.dishId;

        return (
            <ScrollView style={{ flex: 1, marginBottom: 15 }}>
                <RenderDish
                    dish={this.props.dishes.dishes[+dishId]}
                    favorite={this.props.favorites.some(el => el === dishId)}
                    onPress={() => this.markFavorite(dishId)}
                    toggleModal={() => this.toggleModal()}
                />
                <RenderComments comments={this.props.comments.comments.filter((comment) => comment.dishId === dishId)} />

                <Modal
                    animationType={'slide'}
                    transparent={false}
                    visible={this.state.showModal}
                    onDismiss={() => this.toggleModal()}
                    onRequestClose={() => this.toggleModal()}
                >
                    <View style={styles.modal}>
                        <Rating showRating fractions="{1}"
                            style={styles.modalText}
                            onFinishRating={(value) => this.setState({ rating: value })}
                        />
                        <Input
                            style={styles.modalText}
                            placeholder=' Author'
                            leftIcon={{ type: 'font-awesome', name: 'user-o' }}
                            onChangeText={(value) => this.setState({ author: value })}
                        />
                        <Input
                            style={styles.modalText}
                            placeholder=' Comment'
                            leftIcon={{ type: 'font-awesome', name: 'comment-o' }}
                            onChangeText={(value) => this.setState({ comment: value })}
                        />
                        <View style={styles.modalText}>
                            <Button
                                onPress={() => { this.handelSubmit() }}
                                color='#512DA8'
                                title='Submit'
                            />
                        </View>
                        <View style={styles.modalText}>
                            <Button
                                onPress={() => { this.toggleModal() }}
                                color='#A9A9A9'
                                title='Cancel'
                            />
                        </View>
                    </View>
                </Modal>

            </ScrollView>
        );
    }
}


const styles = StyleSheet.create({
    modal: {
        justifyContent: 'center',
        margin: 20
    },
    modalText: {
        fontSize: 18,
        margin: 10
    }

});

export default connect(mapStateToProps, mapDispatchToProps)(Dishdetail);