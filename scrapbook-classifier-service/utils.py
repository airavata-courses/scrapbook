from imageai.Classification import ImageClassification
import os

def get_predictions(image):
    try:
        execution_path = os.getcwd()
        prediction = ImageClassification()
        prediction.setModelTypeAsDenseNet121()
        prediction.setModelPath(os.path.join(execution_path, "DenseNet-BC-121-32.h5"))
        prediction.loadModel()

        predictions, probabilities = prediction.classifyImage(image, result_count=3, input_type="stream" )
        
        return predictions
    except Exception as e:
        print(e)
    return {}