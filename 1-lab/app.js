document.addEventListener("DOMContentLoaded", function () {
  const range10 = range(1, 10, 0.1); // Диапазон от 0 до 15
  const range15 = range(1, 15, 0.1); // Диапазон от 0 до 15
  const range20 = range(-20, 20, 0.1); // Диапазон от 0 до 15
  const range30 = range(-20, 30, 0.1); // Диапазон от 0 до 15

  const trimfData = {
    labels: range15,
    datasets: [
      {
        label: "Треугольная функция",
        data: range15.map((x) => trimf(x, 5, 7, 9)), // Измененные параметры функции
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
        pointRadius: 0,
      },
    ],
  };

  const trapmfData = {
    labels: range15,
    datasets: [
      {
        label: "Трапециевидная функция",
        data: range15.map((x) => trapmf(x, 5, 7, 9, 11)), // Измененные параметры функции
        fill: false,
        borderColor: "rgb(255, 99, 132)",
        tension: 0.1,
        pointRadius: 0,
      },
    ],
  };

  const gaussmfData = {
    labels: range20,
    datasets: [
      {
        label: "Простая функция Гаусса",
        data: range20.map((x) => gaussmf(x, 4, 5)),
        fill: false,
        borderColor: "rgb(153, 102, 255)",
        tension: 0.1,
        pointRadius: 0,
      },
    ],
  };

  const gauss2mfData = {
    labels: range30,
    datasets: [
      {
        label: "Двухсторонняя функция Гаусса [2 3 5 7]",
        data: range30.map((x) => gauss2mf(x, 2, 3, 5, 7)),
        borderColor: "red",
        fill: false,
        tension: 0.1,
        pointRadius: 0,
      },
      {
        label: "Двухсторонняя функция Гаусса [2 4 5 4]",
        data: range30.map((x) => gauss2mf(x, 2, 4, 5, 4)),
        fill: false,
        borderColor: "green",
        tension: 0.1,
        pointRadius: 0,
      },
      {
        label: "Двухсторонняя функция Гаусса [5 7 2 3]",
        data: range30.map((x) => gauss2mf(x, 5, 7, 2, 3)),
        fill: false,
        borderColor: "blue",
        tension: 0.1,
        pointRadius: 0,
      },
    ],
  };

  const gbellmfData = {
    labels: range20,
    datasets: [
      {
        label: "Обобщенный колокол",
        data: range20.map((x) => gbellmf(x, 2, 3, 4)),
        fill: false,
        borderColor: "rgb(54, 162, 235)",
        tension: 0.1,
        pointRadius: 0,
      },
    ],
  };

  const sigmfData = {
    labels: range15,
    datasets: [
      {
        label: "Основная односторонняя сигмоидная функция",
        data: range15.map((x) => sigmf(x, 3, 4)),
        fill: false,
        borderColor: "rgb(255, 99, 132)",
        tension: 0.1,
        pointRadius: 0,
      },
    ],
  };

  const dsigmfData = {
    labels: range15,
    datasets: [
      {
        label: "Двухсторонняя сигмоидная функция",
        data: range15.map((x) => dsigmf(x, 3, 4, 7, 8)),
        fill: false,
        borderColor: "rgb(54, 162, 235)",
        tension: 0.1,
        pointRadius: 0,
      },
    ],
  };

  const psimgfData = {
    labels: range15,
    datasets: [
      {
        label: "Несимметричная двухсторонняя сигмоидная функция",
        data: range15.map((x) => psimgf(x, 3, 4, 7, 8)),
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
        pointRadius: 0,
      },
    ],
  };

  const zmfData = {
    labels: range15,
    datasets: [
      {
        label: "Полиномиальная Z-функция",
        data: range15.map((x) => zmf(x, 2, 5)),
        fill: false,
        borderColor: "rgb(255, 206, 86)",
        tension: 0.1,
        pointRadius: 0,
      },
    ],
  };

  const pimfData = {
    labels: range15,
    datasets: [
      {
        label: "PI-функция",
        data: range15.map((x) => pimf(x, 2, 5, 7, 10)),
        fill: false,
        borderColor: "rgb(153, 102, 255)",
        tension: 0.1,
        pointRadius: 0,
      },
    ],
  };

  const smfData = {
    labels: range15,
    datasets: [
      {
        label: "S-функция",
        data: range15.map((x) => smf(x, 7, 10)),
        fill: false,
        borderColor: "rgb(255, 159, 64)",
        tension: 0.1,
        pointRadius: 0,
      },
    ],
  };

  const gaussmf27 = (x) => gaussmf(x, 2, 7);
  const gaussmf35 = (x) => gaussmf(x, 3, 5);

  const minimaxIntersectionData = {
    labels: range10,
    datasets: [
      {
        label: "gaussmf [2 7]",
        data: range10.map(gaussmf27),
        fill: false,
        borderColor: "red",
        borderDash: [5, 5],
        tension: 0.1,
        pointRadius: 0,
      },
      {
        label: "gaussmf [3 5]",
        data: range10.map(gaussmf35),
        fill: false,
        borderColor: "green",
        borderDash: [5, 5],
        tension: 0.1,
        pointRadius: 0,
      },
      {
        label: "Минимаксное пересечение",
        data: minimaxIntersection(range10, gaussmf27, gaussmf35),
        fill: false,
        borderColor: "blue",
        tension: 0.1,
        pointRadius: 0,
      },
    ],
  };

  const minimaxUnionData = {
    labels: range10,
    datasets: [
      {
        label: "gaussmf [2 7]",
        data: range10.map(gaussmf27),
        fill: false,
        borderColor: "red",
        borderDash: [5, 5],
        tension: 0.1,
        pointRadius: 0,
      },
      {
        label: "gaussmf [3 5]",
        data: range10.map(gaussmf35),
        fill: false,
        borderColor: "green",
        borderDash: [5, 5],
        tension: 0.1,
        pointRadius: 0,
      },
      {
        label: "Минимаксное объединение",
        data: minimaxUnion(range10, gaussmf27, gaussmf35),
        fill: false,
        borderColor: "blue",
        tension: 0.1,
        pointRadius: 0,
      },
    ],
  };

  const probabilisticIntersectionData = {
    labels: range10,
    datasets: [
      {
        label: "gaussmf [2 7]",
        data: range10.map(gaussmf27),
        fill: false,
        borderColor: "red",
        borderDash: [5, 5],
        tension: 0.1,
        pointRadius: 0,
      },
      {
        label: "gaussmf [3 5]",
        data: range10.map(gaussmf35),
        fill: false,
        borderColor: "green",
        borderDash: [5, 5],
        tension: 0.1,
        pointRadius: 0,
      },
      {
        label: "Вероятностное пересечение",
        data: probabilisticIntersection(range10, gaussmf27, gaussmf35),
        fill: false,
        borderColor: "blue",
        tension: 0.1,
        pointRadius: 0,
      },
    ],
  };

  const probabilisticUnionData = {
    labels: range10,
    datasets: [
      {
        label: "gaussmf [2 7]",
        data: range10.map(gaussmf27),
        fill: false,
        borderColor: "red",
        borderDash: [5, 5],
        tension: 0.1,
        pointRadius: 0,
      },
      {
        label: "gaussmf [3 5]",
        data: range10.map(gaussmf35),
        fill: false,
        borderColor: "green",
        borderDash: [5, 5],
        tension: 0.1,
        pointRadius: 0,
      },
      {
        label: "Вероятностное объединение",
        data: probabilisticUnion(range10, gaussmf27, gaussmf35),
        fill: false,
        borderColor: "blue",
        tension: 0.1,
        pointRadius: 0,
      },
    ],
  };

  const gaussmf26 = (x) => gaussmf(x, 2, 6);

  const complementData = {
    labels: range10,
    datasets: [
      {
        label: "gaussmf [2 6]",
        data: range10.map(gaussmf26),
        fill: false,
        borderColor: "blue",
        borderDash: [5, 5],
        tension: 0.1,
        pointRadius: 0,
      },
      {
        label: "Дополнение",
        data: complement(range10, gaussmf26),
        fill: false,
        borderColor: "red",
        tension: 0.1,
        pointRadius: 0,
      },
    ],
  };

  new Chart(document.getElementById("trimfChart"), {
    type: "line",
    data: trimfData,
  });

  new Chart(document.getElementById("trapmfChart"), {
    type: "line",
    data: trapmfData,
  });

  new Chart(document.getElementById("gaussmfChart"), {
    type: "line",
    data: gaussmfData,
  });

  new Chart(document.getElementById("gauss2mfChart"), {
    type: "line",
    data: gauss2mfData,
  });

  new Chart(document.getElementById("gbellmfChart"), {
    type: "line",
    data: gbellmfData,
  });

  new Chart(document.getElementById("sigmfChart"), {
    type: "line",
    data: sigmfData,
  });

  new Chart(document.getElementById("dsigmfChart"), {
    type: "line",
    data: dsigmfData,
  });

  new Chart(document.getElementById("psimgfChart"), {
    type: "line",
    data: psimgfData,
  });

  new Chart(document.getElementById("zmfChart"), {
    type: "line",
    data: zmfData,
  });

  new Chart(document.getElementById("pimfChart"), {
    type: "line",
    data: pimfData,
  });

  new Chart(document.getElementById("smfChart"), {
    type: "line",
    data: smfData,
  });
  new Chart(document.getElementById("minimaxIntersectionChart"), {
    type: "line",
    data: minimaxIntersectionData,
  });
  new Chart(document.getElementById("minimaxUnionChart"), {
    type: "line",
    data: minimaxUnionData,
  });
  new Chart(document.getElementById("probabilisticIntersectionChart"), {
    type: "line",
    data: probabilisticIntersectionData,
  });
  new Chart(document.getElementById("probabilisticUnionChart"), {
    type: "line",
    data: probabilisticUnionData,
  });
  new Chart(document.getElementById("complementChart"), {
    type: "line",
    data: complementData,
  });

  function trimf(x, a, b, c) {
    return Math.max(Math.min((x - a) / (b - a), (c - x) / (c - b)), 0);
  }

  function trapmf(x, a, b, c, d) {
    return Math.max(
      Math.min(Math.min((x - a) / (b - a), 1), (d - x) / (d - c)),
      0
    );
  }

  function gaussian(x, sd, c) {
    return Math.exp(-Math.pow(x - c, 2) / (2 * Math.pow(sd, 2)));
  }

  function gaussmf(x, sd, c) {
    return gaussian(x, sd, c);
  }

  function gauss2mf(x, sd1, c1, sd2, c2) {
    if (x >= c1 && x <= c2) {
      return 1;
    } else if (x < c1) {
      return gaussian(x, sd1, c1);
    } else {
      return gaussian(x, sd2, c2);
    }
  }

  function gbellmf(x, a, b, c) {
    return 1 / (1 + Math.pow(Math.abs((x - c) / a), 2 * b));
  }

  function sigmoid(x, c, a) {
    return 1 / (1 + Math.exp(-a * (x - c)));
  }

  function sigmf(x, c, a) {
    return sigmoid(x, c, a);
  }

  function dsigmf(x, c1, a1, c2, a2) {
    return sigmoid(x, c1, a1) - sigmoid(x, c2, a2);
  }

  function psimgf(x, c1, a1, c2, a2) {
    return sigmoid(x, c1, a1) * sigmoid(x, c2, a2);
  }

  function zmf(x, a, b) {
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

  function pimf(x, a, b, c, d) {
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

  function smf(x, a, b) {
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

  function minimaxIntersection(xs, mf1, mf2) {
    const cb = (x) => Math.min(mf1(x), mf2(x));
    return xs.map(cb);
  }

  function minimaxUnion(xs, mf1, mf2) {
    const cb = (x) => Math.max(mf1(x), mf2(x));
    return xs.map(cb);
  }

  function probabilisticIntersection(xs, mf1, mf2) {
    const cb = (x) => mf1(x) * mf2(x);
    return xs.map(cb);
  }

  function probabilisticUnion(xs, mf1, mf2) {
    const cb = (x) => mf1(x) + mf2(x) - mf1(x) * mf2(x);
    return xs.map(cb);
  }

  function complement(xs, mf) {
    const cb = (x) => 1 - mf(x);
    return xs.map(cb);
  }
});

function getPrecision(num) {
  const numStr = num.toString();

  // Check if the number is in exponential form
  if (numStr.includes("e")) {
    const parts = numStr.split("e");
    const decimalPart = parts[0].split(".")[1] || "";
    const exponent = parseInt(parts[1], 10);
    if (exponent < 0) {
      // Adjust precision for numbers in the form of 1.23e-4
      return decimalPart.length - exponent;
    }
    // For positive exponents, precision is effectively 0
    return 0;
  }

  // For non-exponential numbers
  const decimalPosition = numStr.indexOf(".");
  if (decimalPosition === -1) {
    return 0; // No decimal point means no fractional part
  }

  return numStr.length - decimalPosition - 1;
}

function range(from, to, step) {
  if (step <= 0) {
    console.error("Step must be greater than 0.");
    return [];
  }

  const result = [];
  for (let i = from; i < to; i += step) {
    result.push(i.toFixed(getPrecision(step)));
  }
  return result;
}
