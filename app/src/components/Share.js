import React from 'react';
import { Alert, Share, View, Button } from 'react-native';

const ShareExample = (props) => {
    const { title, url } = props;

    const onShare = async () => {
        try {
            const result = await Share.share({
                message: `${title}\n${url}`
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                } else {
                }
            } else if (result.action === Share.dismissedAction) {

            }
        } catch (error) {
            Alert.alert(error.message);
        }
    };

    return (
        <View style={{ marginTop: 10 }}>
            <Button onPress={onShare} title="Share" />
        </View>
    );
};

export default ShareExample;
