// CircularTo.js
import React from 'react';
import { View, StyleSheet } from 'react-native';

const CircularTo = ({ segments = [] }) => {
    const renderSegments = () => {
        let startAngle = -90; // Start from the top (-90 degrees)

        return segments.map((segment, index) => {
            const endAngle = startAngle + (segment.angle / 360) * 360;

            const path = {
                width: segment.radius * 2,
                height: segment.radius * 2,
                borderRadius: segment.radius,
                borderWidth: segment.strokeWidth,
                borderColor: segment.borderColor,
                borderRightColor: 'transparent',
                borderTopColor: 'transparent',
                transform: [{ translateX: segment.radius / 2 }, { translateY: segment.radius / 2 }],
                overflow: 'hidden',
                position: 'absolute',
            };

            const maskStyle = {
                width: segment.radius * 2,
                height: segment.radius * 2,
                borderTopLeftRadius: segment.radius,
                borderTopRightRadius: segment.radius,
                borderBottomRightRadius: segment.radius,
                borderBottomLeftRadius: segment.radius,
                overflow: 'hidden',
                position: 'absolute',
                transform: [{ rotate: `${startAngle}deg` }],
            };

            startAngle = endAngle;

            return (
                <View key={index} style={[styles.segment, path]}>
                    <View style={[styles.mask, maskStyle]}>
                        <View
                            style={[
                                styles.slice,
                                {
                                    width: segment.radius * 2,
                                    height: segment.radius * 2,
                                    borderTopLeftRadius: segment.radius,
                                    borderTopRightRadius: segment.radius,
                                    borderBottomRightRadius: segment.radius,
                                    borderBottomLeftRadius: segment.radius,
                                    backgroundColor: segment.progressColor,
                                    transform: [{ rotate: '45deg' }],
                                },
                            ]}
                        />
                    </View>
                </View>
            );
        });
    };

    return <View style={styles.container}>{renderSegments()}</View>;
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    segment: {
        position: 'absolute',
    },
    mask: {
        width: '100%',
        height: '100%',
    },
    slice: {
        position: 'absolute',
    },
});

export default CircularTo;
