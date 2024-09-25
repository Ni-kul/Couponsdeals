// CircularProgress
import React, { useRef, useEffect, useState } from 'react';
import { Animated, Easing, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

const CircularProgress = ({ size, strokeWidth, progress, onChange, color }) => {
    const [isAnimating, setIsAnimating] = useState(false);
    const animatedValue = useRef(new Animated.Value(progress)).current;

    useEffect(() => {
        if (!isAnimating) {
            Animated.timing(animatedValue, {
                toValue: progress,
                // duration: 1000,
                easing: Easing.linear,
                useNativeDriver: true,
            }).start();
        }
    }, [animatedValue, progress, isAnimating]);

    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [circumference, 0],
    });

    const percentage = Math.round(progress * 100);

    const handlePress = () => {
        setIsAnimating(true);
        const newProgress = progress === 1 ? 0 : progress + 0.1;
        if (onChange) {
            onChange(newProgress);
        }
        Animated.timing(animatedValue, {
            toValue: newProgress,
            // duration: 1000,
            easing: Easing.linear,
            useNativeDriver: true,
        }).start(() => {
            setIsAnimating(false);
        });
    };

    return (
        <TouchableOpacity onPress={handlePress}>
            <View style={{ width: size, height: size, }}>
                <Svg width={size} height={size}>
                    <Circle
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        fill="transparent"
                        // stroke="#e1e1e1"
                        stroke="#EFEDED"
                        strokeWidth={strokeWidth}
                    />
                    <AnimatedCircle
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        fill="transparent"
                        stroke={color}
                        strokeWidth={strokeWidth}
                        strokeDasharray={`${circumference}, ${circumference}`}
                        strokeDashoffset={strokeDashoffset}
                    />
                </Svg>
                <Text style={{ color: '#000000', position: "absolute", top: size / 2 - 10, left: size / 2 - 15, alignSelf: "center", fontWeight: '600', fontSize: 16 }}>
                    {`${percentage}%`}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const styles = StyleSheet.create({

});

export default CircularProgress;