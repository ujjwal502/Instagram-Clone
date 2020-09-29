import React from 'react';

import {
    Container,
    ContainerHeader,
    GroupLabel,
    Label,
    ContainerScrollStory,
    ContainerItemStory,
    ContainerPhoto,
    Photo,
    Name,
} from './styles';

import Icon from 'react-native-vector-icons/FontAwesome5';

import stories from './stories.json';

const Stories = ({ onShowStoriesModal }) => {
    return (
        <Container>
            <ContainerHeader>
                <Label>Stories</Label>
                <GroupLabel>
                    <Icon name="caret-right" size={20} />
                    <Label>Watch all</Label>
                </GroupLabel>
            </ContainerHeader>

            <ContainerScrollStory>
                {stories &&
                    stories.map((storie, index) => (
                        <ContainerItemStory key={index} onPress={onShowStoriesModal}>
                            <ContainerPhoto>
                                <Photo source={{ uri: storie.photo }} />
                            </ContainerPhoto>
                            <Name>{storie.name}</Name>
                        </ContainerItemStory>
                    ))}
            </ContainerScrollStory>
        </Container>
    );
};

export default Stories;