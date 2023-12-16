clear;clc;
trainingFileId = fopen('training.dat', 'r');
formatSpec = '%d';
trainingData = fscanf(trainingFileId, formatSpec);
fclose(trainingFileId);
testingFileId = fopen('testing.dat', 'r');
testingData = fscanf(testingFileId, formatSpec);
fclose(testingFileId);
checkingFileId = fopen('checking.dat', 'r');
checkingData = fscanf(checkingFileId, formatSpec);
fclose(checkingFileId);


INPUT_SIZE = 6;
OUTPUT_SIZE = 1;

% Чтение данных
fileId = fopen('training.dat', 'r');
data = fscanf(fileId, '%d');
fclose(fileId);

% Создание новой матрицы
numRows = length(data) - INPUT_SIZE; % Количество строк в новой матрице
matrix = zeros(numRows, INPUT_SIZE + OUTPUT_SIZE);

for i = 1:numRows
    matrix(i, :) = data(i:i+INPUT_SIZE)';
end

% Запись в файл
fileId = fopen('training-matrix.dat', 'w');
for i = 1:size(matrix, 1)
    fprintf(fileId, '%d ', matrix(i, :));
    fprintf(fileId, '\n');
end
fclose(fileId);


% Открытие файла
fileId = fopen('training-matrix.dat', 'r');

% Чтение и разделение данных
input = [];
output = [];
while ~feof(fileId)
    line = fgetl(fileId);
    nums = str2num(line);
    input = [input; nums(1:end-1)];
    output = [output; nums(end)];
end

fclose(fileId);

% Открытие файла
fileId = fopen('testing.dat', 'r');

% Чтение и разделение данных
testingInput = [];
testingOutput = [];
while ~feof(fileId)
    line = fgetl(fileId);
    nums = str2num(line);
    testingInput = [testingInput; nums(1:end-1)];
    testingOutput = [testingOutput; nums(end)];
end

fclose(fileId);

% Теперь input и output содержат входные и выходные данные для обучения сети


% Обучение нейронной сети
network = newff(minmax(input'), [INPUT_SIZE, floor(INPUT_SIZE / 2), floor(INPUT_SIZE / 3 + 1), 1], {'logsig' 'logsig' 'logsig', 'purelin'});
network.trainParam.lr = 0.01;
network.performFcn = 'mse';
network.trainParam.epochs = 100;
network.trainParam.goal = 1e-6;
network = train(network, input', output');

testSample = testingInput(1,:)';

% Проверка размера
if size(testSample, 1) ~= network.inputs{1}.size
    error('Размер входных данных не соответствует размеру входного слоя сети');
end

% Получение предсказания
result = network(testSample)

testingOutput(1,:)


