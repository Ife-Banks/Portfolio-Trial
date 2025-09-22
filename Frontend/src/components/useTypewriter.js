// useTypewriter.js
import { useState, useEffect, useCallback } from 'react';

export const useTypewriter = (phrases, typingSpeed = 150, deletingSpeed = 50, pauseTime = 2000) => {
    const [displayText, setDisplayText] = useState('');
    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [speed, setSpeed] = useState(typingSpeed);

    const type = useCallback(() => {
        const currentPhrase = phrases[currentPhraseIndex % phrases.length];
        const fullText = typeof currentPhrase === 'object' ? currentPhrase.text : currentPhrase;
        
        if (isDeleting) {
            setDisplayText(fullText.substring(0, displayText.length - 1));
            setSpeed(deletingSpeed);
        } else {
            setDisplayText(fullText.substring(0, displayText.length + 1));
            setSpeed(typingSpeed);
        }

        if (!isDeleting && displayText === fullText) {
            setSpeed(pauseTime);
            setIsDeleting(true);
        } else if (isDeleting && displayText === '') {
            setIsDeleting(false);
            setCurrentPhraseIndex(currentPhraseIndex + 1);
            setSpeed(typingSpeed);
        }
    }, [currentPhraseIndex, displayText, isDeleting, phrases, typingSpeed, deletingSpeed, pauseTime]);

    useEffect(() => {
        const timer = setTimeout(type, speed);
        return () => clearTimeout(timer);
    }, [displayText, isDeleting, speed, type]);

    return displayText;
};
