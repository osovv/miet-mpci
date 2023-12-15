document.addEventListener("DOMContentLoaded", function () {
  const range = Array.from({ length: 151 }, (_, i) => i / 10); // Диапазон от 0 до 15

  const triangleData = {
    labels: range,
    datasets: [
      {
        label: "Треугольная функция",
        data: range.map((x) => triangularMembershipFunction(x, 2, 7, 12)), // Измененные параметры функции
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
        pointRadius: 0,
      },
    ],
  };

  const trapezoidData = {
    labels: range,
    datasets: [
      {
        label: "Трапециевидная функция",
        data: range.map((x) => trapezoidalMembershipFunction(x, 3, 5, 10, 12)), // Измененные параметры функции
        fill: false,
        borderColor: "rgb(255, 99, 132)",
        tension: 0.1,
        pointRadius: 0,
      },
    ],
  };

  const gaussianData = {
    labels: range,
    datasets: [
      {
        label: "Простая функция Гаусса",
        data: range.map((x) => gaussianMembershipFunction(x, 7.5, 2)),
        fill: false,
        borderColor: "rgb(153, 102, 255)",
        tension: 0.1,
        pointRadius: 0,
      },
    ],
  };

  const biGaussianData = {
    labels: range,
    datasets: [
      {
        label: "Двухсторонняя функция Гаусса",
        data: range.map((x) => biGaussianMembershipFunction(x, 2, 4, 1, 8)),
        fill: false,
        borderColor: "rgb(255, 159, 64)",
        tension: 0.1,
        pointRadius: 0,
      },
    ],
  };

  const bellData = {
    labels: range,
    datasets: [
      {
        label: "Обобщенный колокол",
        data: range.map((x) => generalizedBellMembershipFunction(x, 2, 3, 4)),
        fill: false,
        borderColor: "rgb(54, 162, 235)",
        tension: 0.1,
        pointRadius: 0,
      },
    ],
  };

  const sigmoidData = {
    labels: range,
    datasets: [
      {
        label: "Основная односторонняя сигмоидная функция",
        data: range.map((x) => sigmoidMembershipFunction(x, 3, 4)),
        fill: false,
        borderColor: "rgb(255, 99, 132)",
        tension: 0.1,
        pointRadius: 0,
      },
    ],
  };

  const biSigmoidData = {
    labels: range,
    datasets: [
      {
        label: "Двухсторонняя сигмоидная функция",
        data: range.map((x) => biSigmoidMembershipFunction(x, 3, 4, 7, 8)),
        fill: false,
        borderColor: "rgb(54, 162, 235)",
        tension: 0.1,
        pointRadius: 0,
      },
    ],
  };

  const asymBiSigmoidData = {
    labels: range,
    datasets: [
      {
        label: "Несимметричная двухсторонняя сигмоидная функция",
        data: range.map((x) => asymBiSigmoidMembershipFunction(x, 3, 4, 7, 8)),
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
        pointRadius: 0,
      },
    ],
  };

  const zFunctionData = {
    labels: range,
    datasets: [
      {
        label: "Полиномиальная Z-функция",
        data: range.map((x) => zFunction(x, 3, 7)),
        fill: false,
        borderColor: "rgb(255, 206, 86)",
        tension: 0.1,
        pointRadius: 0,
      },
    ],
  };

  const piFunctionData = {
    labels: range,
    datasets: [
      {
        label: "PI-функция",
        data: range.map((x) => piFunction(x, 1, 4, 5, 10)),
        fill: false,
        borderColor: "rgb(153, 102, 255)",
        tension: 0.1,
        pointRadius: 0,
      },
    ],
  };

  const sFunctionData = {
    labels: range,
    datasets: [
      {
        label: "S-функция",
        data: range.map((x) => sFunction(x, 5, 10)),
        fill: false,
        borderColor: "rgb(255, 159, 64)",
        tension: 0.1,
        pointRadius: 0,
      },
    ],
  };

  new Chart(document.getElementById("triangleChart"), {
    type: "line",
    data: triangleData,
  });

  new Chart(document.getElementById("trapezoidChart"), {
    type: "line",
    data: trapezoidData,
  });

  new Chart(document.getElementById("gaussianChart"), {
    type: "line",
    data: gaussianData,
  });

  new Chart(document.getElementById("biGaussianChart"), {
    type: "line",
    data: biGaussianData,
  });

  new Chart(document.getElementById("bellChart"), {
    type: "line",
    data: bellData,
  });

  new Chart(document.getElementById("sigmoidChart"), {
    type: "line",
    data: sigmoidData,
  });

  new Chart(document.getElementById("biSigmoidChart"), {
    type: "line",
    data: biSigmoidData,
  });

  new Chart(document.getElementById("asymBiSigmoidChart"), {
    type: "line",
    data: asymBiSigmoidData,
  });

  new Chart(document.getElementById("zFunctionChart"), {
    type: "line",
    data: zFunctionData,
  });

  new Chart(document.getElementById("piFunctionChart"), {
    type: "line",
    data: piFunctionData,
  });

  new Chart(document.getElementById("sFunctionChart"), {
    type: "line",
    data: sFunctionData,
  });

  function triangularMembershipFunction(x, a, b, c) {
    return Math.max(Math.min((x - a) / (b - a), (c - x) / (c - b)), 0);
  }

  function trapezoidalMembershipFunction(x, a, b, c, d) {
    return Math.max(
      Math.min(Math.min((x - a) / (b - a), 1), (d - x) / (d - c)),
      0
    );
  }

  function gaussianMembershipFunction(x, c, sd) {
    return Math.exp(-Math.pow(x - c, 2) / (2 * Math.pow(sd, 2)));
  }

  function biGaussianMembershipFunction(x, sd1, c1, sd2, c2) {
    if (x >= c1 && x <= c2) {
      return 1;
    } else if (x < c1) {
      return Math.exp(-Math.pow(x - c1, 2) / (2 * Math.pow(sd1, 2)));
    } else {
      return Math.exp(-Math.pow(x - c2, 2) / (2 * Math.pow(sd2, 2)));
    }
  }

  function generalizedBellMembershipFunction(x, a, b, c) {
    return 1 / (1 + Math.pow(Math.abs((x - c) / a), 2 * b));
  }

  function sigmoid(x, c, a) {
    return 1 / (1 + Math.exp(-a * (x - c)));
  }

  function sigmoidMembershipFunction(x, c, a) {
    return sigmoid(x, c, a);
  }

  function biSigmoidMembershipFunction(x, c1, a1, c2, a2) {
    return sigmoid(x, c1, a1) - sigmoid(x, c2, a2);
  }

  function asymBiSigmoidMembershipFunction(x, c1, a1, c2, a2) {
    return sigmoid(x, c1, a1) * sigmoid(x, c2, a2);
  }

  function zFunction(x, a, b) {
    if (x <= a) {
      return 1;
    }

    if (x >= b) {
      return 0;
    }

    if (a <= x && x <= (a + b) / 2) {
      return 1 - 2 * Math.pow((x - a) / (b - a), 2);
    }

    if ((a + b) / 2 <= x && x <= b) {
      return 2 * Math.pow((x - b) / (b - a), 2);
    }
  }

  function piFunction(x, a, b, c, d) {
    if (x <= a) {
      return 0;
    }

    if (a <= x && x <= (a + b) / 2) {
      return 2 * Math.pow((x - a) / (b - a), 2);
    }

    if ((a + b) / 2 <= x && x <= b) {
      return 1 - 2 * Math.pow((x - b) / (b - a), 2);
    }

    if (b <= x && x <= c) {
      return 1;
    }

    if (c <= x && x <= (c + d) / 2) {
      return 1 - 2 * Math.pow((x - c) / (d - c), 2);
    }

    if ((c + d) / 2 <= x && x <= d) {
      return 2 * Math.pow((x - d) / (d - c), 2);
    }

    if (x >= d) {
      return 0;
    }
  }

  function sFunction(x, a, b) {
    if (x <= a) {
      return 0;
    }

    if (x >= b) {
      return 1;
    }

    if (a <= x && x <= (a + b) / 2) {
      return 2 * Math.pow((x - a) / (b - a), 2);
    }

    if ((a + b) / 2 <= x && x <= b) {
      return 1 - 2 * Math.pow((x - b) / (b - a), 2);
    }
  }
});
